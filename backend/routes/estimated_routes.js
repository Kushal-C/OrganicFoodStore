var express = require('express');
var router = express.Router();
var cors = require('cors')
// const googleMapsClient = require('./server_constants');
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAsbJmghb9NrphRYCTsdqP7NxwwlTVSiIM'
});

const database = require('./server_constants').mysql_pool;
router.all('*', cors());

// var src = "https://apis.googl.com/js/api.js";
// function start() {
//     // Initializes the client with the API key and the Translate API.
//     gapi.client.init({
//       'apiKey': 'AIzaSyAsbJmghb9NrphRYCTsdqP7NxwwlTVSiIM',
//       'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
//     }).then(function() {
//       // Executes an API request, and returns a Promise.
//       // The method name `language.translations.list` comes from the API discovery.
//       return gapi.client.language.translations.list({
//         q: 'hello world',
//         source: 'en',
//         target: 'de',
//       });
//     }).then(function(response) {
//       console.log(response.result.data.translations[0].translatedText);
//     }, function(reason) {
//       console.log('Error: ' + reason.result.error.message);
//     });
//   };

//   // Loads the JavaScript client library and invokes `start` afterwards.
//   gapi.load('client', start);



// function callback(res, status){
//     console.log("res: " + res);
//     if (status != 'OK') {console.log("FAIL " + JSON.stringify(status)); return;}
//     console.log("SUCCESS"); return;
// }

function getClosestStore(address, startTime, func){
    var stores = ["37.570422, -122.335551", "37.358999, -121.964735"];
    // database.getConnection(function(err, connection){
    //     if (err) throw err;
    //     var sql = "SELECT address FROM store";
    //     connection.query(sql, function(err, result, fields){
    //         if (err) throw err;
    //         stores = result;
    //     });
    // });
    //var service = new google.maps.DistanceMatrixService();
    googleMapsClient.distanceMatrix(
        {
            origins: stores,
            destinations: address,
            mode: "driving",
            units: "imperial",
            avoid: ['highways', 'indoor'],
            departure_time: startTime
        }, function(err, response){
            if (!err) {
                var distance1 = JSON.stringify(response.json.rows[0].elements[0].distance.text)
                var distance2 = JSON.stringify(response.json.rows[1].elements[0].distance.text)
                console.log(distance1 + " " + distance2);
                if (distance1 > distance2){func("SUCCESS: stores[1]" + stores[1])}
                else {func(stores[0])}
            }
            else {
                func(err)
            }
        });
};

router.post("/", (req, res, next) => {
      database.getConnection(function(err, connection){
          if (err) throw err;
          var sql = "SELECT address, city FROM user WHERE userId = 1";
          connection.query(sql, function(err, result, fields){
              if (err) throw err;
              if (result.length > 0){
                console.log("result: " + JSON.stringify(result));
                var addCity = JSON.parse(JSON.stringify(result));
                var userAddress = addCity[0]['address'] + ', ' + addCity[0]['city'];
                console.log(userAddress);
                var ua = "37.331086, -121.874548";
                var st = Date.now()
                var closest = getClosestStore(ua, st, function(store){store});
                //getClosestStore(userAddress);
                // var stringified = JSON.stringify(result);
                // var desiredVals = JSON.parse(stringified);
                // for (var i = 0; i < desiredVals.length; i++){
                //     console.log(desiredVals[i]['address']);
                // }
                // console.log(address);

                res.send({origin: "S 4th St, San Jose, CA 95112",
                destination: "2293 Cabrillo Ave Santa Clara, CA 95050",
                arrival_time: "40 minutes",
                order_status: "In route",
                items: {name: "Red Baron's Pizza", quantity: 1},
                total_weight: "3",
                weight_unit: "lbs",
                price: "8.99",
                tax: "0.89",
                total_cost: "9.89"
                });
            }
              else {
                  res.send({responseCode: "404"});
            }
          });
      });

  });

module.exports = router;
