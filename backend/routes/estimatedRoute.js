var express = require('express');
var router = express.Router();
var cors = require('cors')

//require server_constants and call it myConsts, then access each module.export{} const
const myConsts = require('../config/googleconfig');
const googleMapsClient = myConsts.googleMapsClient;
const storeGeoLocs = myConsts.storeGeoLocs;
const database = require('../config/dbconfig').mysql_pool;

router.all('*', cors());

router.post("/", (req, res, next) => {
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
            if (result.length > 0){
                items = result;
                sql2 = "SELECT SUM(total_weight) as 'total_weight', SUM(total_cost) as 'price' FROM cart WHERE userId = "+uId+" AND transactionId = " +tId; //queries for total weight and cost of product for a particular cart, if nothing in cart, error response sent to frontend
                connection.query(sql2, function(err, result2){
                    if (err) {
                        connection.release();
                        console.log("estimatedRoute connection released");
                        throw err;
                    }
                    if (result2.length > 0){
                        var weight = parseFloat(result2[0].total_weight.toFixed(2));
                        var price = parseFloat(result2[0].price.toFixed(2));
                        var tax = parseFloat((price * .0725).toFixed(2));
                        var totalcost = price+tax;
                        res.send({  origin: ua,
                                    destination: "1984 Los Padres Blvd Santa Clara, CA 95050",
                                    arrival_time: r,
                                    order_status: "In route",
                                    items: items,
                                    total_weight: weight,
                                    price: price,
                                    tax: tax,
                                    total_cost: totalcost
                        });
                    }
                    else{
                        res.send({responseCode: "404",
                                    reason: "Nothing in cart"});
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