var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('./config/dbconfig').mysql_pool;
router.all('*', cors());


// function aggregate(jsonObj){
//     var result = JSON.parse(jsonObj);
//     return result;
//     // var resultObj = {};
//     // resultObj.data.push({cartId: {productId: [], quantity: []}});
//     // for (var i = 0; i < jsonObj.length; i++){
//     //     resultObj.cartId = jsonObj[i].cartId;
//     //     for (var j = 1; j < jsonObj.length-1; j++){
//     //         if (jsonObj[j].cartId === resultObj[i].cartId){
//     //              resultObj.productId[j] = jsonObj[j].productId;
//     //              resultObj.quantity[j] = jsonObj[j].quantity;
//     //         }
//     //         break;
//     //     }
        
//     // }
//     // return resultObj;
// }

//send the json obj. 
//need name of item, quantity, total cost of same product, total cost of all products
router.get("/", (req, res, next) => {
    console.log("req.body: " + JSON.stringify(req.body));
      database.getConnection(function(err, connection){
          //have to replace userId = 1 with the current user's userId
          var sql = "SELECT * FROM cart as c, (SELECT cartId FROM transaction WHERE userId = 1) as d WHERE c.cartId = d.cartId GROUP BY c.productId";
          connection.query(sql, function(err, result, fields){
              if (err) throw err;
              if (result.length > 0){
                console.log("result: " + JSON.stringify(result));
                //res.send(JSON.stringify(result));
                //console.log("new result: " + aggregate(result));
                res.send(result);
            }
              else {
                res.send({responseCode: "404"});
            }
          });
      });
  });

module.exports = router;  