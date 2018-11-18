var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());

//need name of item, quantity, total cost of same product, total cost of all products
router.get("/", (req, res, next) => {
    var uId = req.body.userId;
    
      database.getConnection(function(err, connection){
          var getOrderInfo = "SELECT transactionId, cartId, status, p.productName, quantity as q, cost * quantity as 'cost' \
                              FROM (SELECT transactionId, status, cartId FROM innodb.transaction WHERE userId = "+uId+") as t, \
                              (SELECT productId, quantity, transactionId as tId FROM innodb.cart WHERE userId = "+uId+") as c, \
                              (SELECT productId, productName, cost FROM innodb.product) as p \
                              WHERE p.productId = c.productId AND t.transactionId = c.tId ORDER BY transactionId;";
          connection.query(getOrderInfo, function(err, result){
            connection.release();
            console.log("pastOrders connection released");
            if (err) throw err;
            if (result.length > 0){
              // console.log("result: " +JSON.stringify(result));
              res.send(result);
            }
            else{
              res.send({responseCode: "404", reason:"No past orders made by this user"});
            }
          });
      });
  });

module.exports = router; 