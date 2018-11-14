var express = require('express');
var router = express.Router();
var cors = require('cors')

//require server_constants and call it myConsts, then access each module.export{} const
var myConsts = require('./server_constants');
const googleMapsClient = myConsts.googleMapsClient;
const storeGeoLocs = myConsts.storeGeoLocs;
const database = myConsts.connection.mysql_pool;

router.all('*', cors());

function getClosestStore(address, startTime){//, func){
    googleMapsClient.distanceMatrix(
        {
            origins: storeGeoLocs,
            destinations: address,
            mode: "driving",
            units: "imperial",
            avoid: ['highways', 'indoor'],
            departure_time: startTime
        }, function(err, response){
            if (err) func(err)
            else if (response.json.rows[0].elements[0].status === 'NOT_FOUND'){throw new Error("Not a valid destination address")}
        })
        .asPromise()
        .then(function(response){
                 console.log("response: " + JSON.stringify(response.json))
                var distance1 = JSON.stringify(response.json.rows[0].elements[0].distance.text) //grabs distance from SM (json)
                var distance2 = JSON.stringify(response.json.rows[1].elements[0].distance.text) //grabs distance from SC (json)

                var unit1 = distance1.substring(distance1.length - 3, distance1.length - 1)     //grabs units of measurement (either ft or mi)
                var unit2 = distance2.substring(distance2.length - 3, distance2.length - 1)

                var d1 = parseFloat(distance1.substring(1, distance1.length - 3))               //parses distance to float from string
                var d2 = parseFloat(distance2.substring(1, distance2.length - 3))
                unit1 === 'ft' ? d1 /= 5280 : d1;                                               //checks units are not in ft, if they are convert to mi
                unit2 === 'ft' ? d2 /= 5280 : d2;                                          
                
                // d1 > d2 ? console.log("return SM") : console.log("return SC")
                return d1 > d2 ? console.log(JSON.stringify({origin: storeGeoLocs[1], deliveryInfo: response.json.rows[1]})) :      //return closest store
                        console.log(JSON.stringify({origin: storeGeoLocs[0], deliveryInfo: response.json.rows[0]}))
            })
        .catch(function(err){
            console.log("ERROR: Invalid destination address " + err);
        });
};

router.post("/", (req, res, next) => {
    var ua = ""
    var items = {}
    database.getConnection(function(err, connection){
          if (err) throw err;
          //NEED TO GET VALID userId!!
          var sql = "SELECT address, city FROM user WHERE userId = 1";
          
          //get closest store and delivery time
          connection.query(sql, function(err, result){                                              //queries for address of user, if no such user error response sent to frontend
            if (err) throw err;
            if (result.length > 0){

                //tests for address
                // ua = "620 S 9th Street, San Jose, CA"
                // ua = "402 N El Camino Real, San Mateo, CA 94401"
                // ua = "1 Washington Square san jose"
                // ua = "fasdf san juoadf"
                
                ua = JSON.stringify(result[0].address) + ", " + JSON.stringify(result[0].city);
                // console.log("user addy: " + ua)
                var st = Date.now();
                getClosestStore(ua, st);
            }
            else {
                res.send({responseCode: "404",
                            reason: "No such userId"});
            }   
          });
          //need to get valid userId and cartId from res
          sql = "SELECT p.productName, c.quantity \
                    FROM product p, (SELECT productId, quantity FROM cart WHERE userId = 1 AND cartId = 1) c\
                    WHERE p.productId = c.productId";
          connection.query(sql, function(err, result){                                                              //queries for product and quantity of product, if no such cart exists, error response sent to frontend
            if (err) throw err;
            if (result.length > 0){
                items = JSON.stringify(result);
                console.log("items result: " +items);
                sql2 = "SELECT SUM(total_weight) as 'total_weight', SUM(total_cost) as 'price' FROM cart WHERE userId = 1 AND cartId = 1"; //queries for total weight and cost of product for a particular cart, if nothing in cart, error response sent to frontend
                connection.query(sql2, function(err, result2){
                    if (err) throw err;
                    if (result2.length > 0){
                        var weight = parseFloat(result2[0].total_weight.toFixed(2));
                        var price = parseFloat(result2[0].price.toFixed(2));
                        var tax = parseFloat((price * .0725).toFixed(2));
                        var totalcost = price+tax;
                        res.send({  origin: ua,
                                    destination: 1,
                                    arrival_time: 1,
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
      });
  });

module.exports = router; 

    // var stores = [];
    // database.getConnection(function(err, connection){
    //     if (err) throw err;
    //     var sql = "SELECT geolocation FROM store";
    //     connection.query(sql, function(err, result, fields){
    //         if (err) throw err;
    //         for(i = 0; i < result.length; i++){
    //             stores.push(result[i]);
    //         }
    //     });
    // });                
                // TEST
                // res.send({origin: "S 4th St, San Jose, CA 95112",
                // destination: "2293 Cabrillo Ave Santa Clara, CA 95050",
                // arrival_time: "40 minutes",
                // order_status: "In route",
                // items: {name: "Red Baron's Pizza", quantity: 1},
                // total_weight: "3",
                // weight_unit: "lbs",
                // price: "8.99",
                // tax: "0.89",
                // total_cost: "9.89"
                // });
                // res.send(result);
                
                
    // var newAddress = new Promise(function(resolve, reject){
    //     resolve(googleMapsClient.geocode({
    //         address: address
    //     }), function(err, response){
    //         if (err) throw err
    //     })
    //     .asPromise()
    //     .then(function(result){
    //         var totalGeoLoc = result.json.results[0].geometry.location.lat + "," +
    //                             result.json.results[0].geometry.location.lng
    //         totalGeoLoc;
    //     }, function(err) {
    //         throw err
    //     })
    // });
    // console.log("newAddy: " + newAddress)