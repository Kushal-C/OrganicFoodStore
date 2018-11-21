var express = require('express');
var router = express.Router();
var cors = require('cors')
var axios = require('axios');

//require server_constants and call it myConsts, then access each module.export{} const
const myConsts = require('../config/googleconfig');
const googleMapsClient = myConsts.googleMapsClient;
const storeGeoLocs = myConsts.storeGeoLocs;
const database = require('../config/dbconfig').mysql_pool;

router.all('*', cors());

async function getNearestStore(store_1, store_2, user_address, callback) {
    const result_1 = await axios.get(
        'https://maps.googleapis.com/maps/api/distancematrix/json',
        {
            params: {
            units: 'imperial',
            origins: `${store_1}`,
            destinations: `${user_address}`,
            key: "AIzaSyAsbJmghb9NrphRYCTsdqP7NxwwlTVSiIM",
        },
    });

    const result_2 = await axios.get(
        'https://maps.googleapis.com/maps/api/distancematrix/json',
        {
            params: {
            units: 'imperial',
            origins: `${store_2}`,
            destinations: `${user_address}`,
            key: "AIzaSyAsbJmghb9NrphRYCTsdqP7NxwwlTVSiIM",
        },
    });

    try {
        console.log("res 1: " + JSON.stringify(result_1));
        console.log("res 2: " + JSON.stringify(result_2));
        res_1_dist = result_1.data.rows[0].elements[0].distance.value;
        res_2_dist = result_2.data.rows[0].elements[0].distance.value;
        console.log("RES 1 Dist: " + res_1_dist);
        console.log("RES 2 Dist: " + res_2_dist);
        if(res_1_dist < res_2_dist) {
            callback({store: store_1, time: result_1.data.rows[0].elements[0].duration.value});
        }
        else {
            callback({store: store_2, time: result_2.data.rows[0].elements[0].duration.value});
        }
    }
    catch(error){
        console.log("Error fetching distance " + error);
        callback({store: store_1, time: result_1.data.rows[0].elements[0].duration.value});
    }
}

router.post("/", async (req, res, next) => {
    var ua = ""
    var r = [];
    var items = {}
    database.getConnection(function(err, connection){
          if (err) throw err;
          var uId = req.body.userId;
          var tId = req.body.transactionId;
          var sql = "SELECT address, city FROM user WHERE userId = " + uId;
          //get closest store and delivery time
          connection.query(sql, function(err, result){                                              //queries for address of user, if no such user error response sent to frontend
            if (err) {
                connection.release();
                console.log("estimatedRoute connection released");
                throw err;
            }
            if (result.length > 0){

                //tests for address
                // ua = "620 S 9th Street, San Jose, CA"
                // ua = "402 N El Camino Real, San Mateo, CA 94401"
                // ua = "1 Washington Square san jose"
                // ua = "fasdf san juoadf"

                ua = result[0].address + ", " + result[0].city;
                var st = Date.now();
                r = googleMapsClient.distanceMatrix(
                    {
                        origins: storeGeoLocs,
                        destinations: ua,
                        mode: "driving",
                        units: "imperial",
                        avoid: ['highways', 'indoor'],
                        departure_time: st
                    }
                    // , function(err, response){
                        // if (err) throw err;
                        // else if (response.json.rows[0].elements[0].status === 'NOT_FOUND'){throw new Error("Not a valid destination address")}
                    // }
                    )
                    .asPromise()
                    .then((response) => {
                        var distance1 = JSON.stringify(response.json.rows[0].elements[0].distance.text) //grabs distance from SM (json)
                        var distance2 = JSON.stringify(response.json.rows[1].elements[0].distance.text) //grabs distance from SC (json)

                        var unit1 = distance1.substring(distance1.length - 3, distance1.length - 1)     //grabs units of measurement (either ft or mi)
                        var unit2 = distance2.substring(distance2.length - 3, distance2.length - 1)

                        var d1 = parseFloat(distance1.substring(1, distance1.length - 3))               //parses distance to float from string
                        var d2 = parseFloat(distance2.substring(1, distance2.length - 3))
                        unit1 === 'ft' ? d1 /= 5280 : d1;                                               //checks units are not in ft, if they are convert to mi
                        unit2 === 'ft' ? d2 /= 5280 : d2;

                        if (d1 > d1){
                            r = {origin: storeGeoLocs[1], deliveryInfo: response.json.rows[1]};
                            // console.log("HI 1: " +JSON.stringify(r));
                            return r;
                        }
                        else{
                            r = {origin: storeGeoLocs[0], deliveryInfo: response.json.rows[0]};
                            // console.log("HI 0: "+JSON.stringify(r));
                            return r;
                        }
                    })
                    .catch((err) => {
                        console.error(err + 'invalid user address');
                    })
                    // console.log('result: '+r);
            }
            else {
                res.send({responseCode: "404",
                            reason: "No such userId"});
            }
          });
          sql = "SELECT p.productName, c.quantity \
                    FROM product p, (SELECT productId, quantity FROM cart WHERE userId = " + uId+ " AND transactionId = "+tId+") c\
                    WHERE p.productId = c.productId";
          connection.query(sql, function(err, result){                                                              //queries for product and quantity of product, if no such cart exists, error response sent to frontend
            if (err) {
                connection.release();
                console.log("estimatedRoute connection released");
                throw err;
            }
            items = result;
            if (result.length > 0){
                sql = "UPDATE transaction SET status = 'Completed' WHERE transactionId = "+tId+" AND userId = "+uId;
                connection.query(sql, function(err, resultUpdate){
                    if (err){
                        connection.release();
                        console.log("estimatedRoute connection released");
                        throw err;
                    }
                    if (resultUpdate.affectedRows > 0 && resultUpdate.warningCount == 0){
                            sql2 = "SELECT SUM(total_weight) as 'total_weight', SUM(total_cost) as 'price' FROM cart WHERE userId = "+uId+" AND transactionId = " +tId; //queries for total weight and cost of product for a particular cart, if nothing in cart, error response sent to frontend
                            connection.query(sql2, function(err, result2){
                                if (err) {
                                    connection.release();
                                    console.log("estimatedRoute connection released");
                                    throw err;
                                }
                                if (result2.length > 0){
                                    sql3 = "SELECT status, orderTime FROM transaction WHERE transactionId = " +tId+ " AND userId = "+uId;
                                    connection.query(sql3, function(err, resultStatus){
                                        if (err) {
                                            connnection.release();
                                            console.log("estimatedRoute connection released");
                                            throw err;
                                        }
                                        if (resultStatus.length > 0){
                                            var weight = parseFloat(result2[0].total_weight.toFixed(2));
                                            var price = parseFloat(result2[0].price.toFixed(2));
                                            var tax = parseFloat((price * .0725).toFixed(2));
                                            var totalcost = price+tax;

                                            getNearestStore(
                                                "1984 Los Padres Blvd Santa Clara, CA 95050",
                                                "402 N El Camino Real, San Mateo, CA 94401",
                                                ua, function(data) {
                                                    let remaining_time = 0;
                                                    let newStatus = "";
                                                    let delivery_time_seconds = data.time;
                                                    console.log("TIME: " + delivery_time_seconds / 60);
                                                    let tmp = Date.now() - resultStatus[0].orderTime;
                                                    console.log("TEMP: " + parseInt(tmp / 60000));
                                                    if(parseInt(tmp / 60000) < parseInt(delivery_time_seconds / 60)) {
                                                        remaining_time = parseInt(delivery_time_seconds / 60) - parseInt(tmp / 60000);
                                                        newStatus = "In Progress";
                                                    }
                                                    else {
                                                        remaining_time = 0;
                                                        newStatus = "Completed";
                                                    }
                                                    console.log("remaining_time: " + remaining_time);
                                                    res.send({
                                                        origin: data.store,
                                                        destination: ua,
                                                        arrival_time: remaining_time,
                                                        order_status: newStatus,
                                                        items: items,
                                                        total_weight: weight,
                                                        price: price,
                                                        tax: tax,
                                                        total_cost: totalcost
                                                    });
                                                }
                                            );
                                        }
                                        else {
                                            res.send({responseCode: "404", reason: "Nothing in cart"});
                                        }
                                    });

                                }
                                else{
                                    res.send({responseCode: "404",
                                        reason: "Nothing in cart"});
                                }
                            });
                    }
                });
            }
            else {
                res.send({responseCode: "404",
                        reason: "Nothing in cart"});
            }
          });
          connection.release();
          console.log("estimatedRoute connection released");
      });
  });

module.exports = router;