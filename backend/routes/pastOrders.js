var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());

//need name of item, quantity, total cost of same product, total cost of all products
router.get("/", (req, res, next) => {
    console.log("req.body: " + JSON.stringify(req.body));
      database.getConnection(function(err, connection){
        console.log("userId: " + req.body.userId)
        // var cartQuery = "SELECT * FROM cart as c, (SELECT cartId FROM transaction WHERE userId = " + req.body.userId + ") as d WHERE c.cartId = d.cartId GROUP BY c.productId";
        var cartQuery = "SELECT cartId, transactionId, SUM(total_weight) as 'total_weight', SUM(total_cost) as 'total_cost' \
                        FROM cart as c, (SELECT cartId as cId, transactionId as tId FROM transaction WHERE userId = " + req.body.userId + ") as d WHERE c.cartId = d.cId AND c.transactionId = d.tId GROUP BY c.cartId"
          connection.query(cartQuery, function(err, result){
              if (err) throw err;
              if (result.length > 0){
                console.log("result: " + JSON.stringify(result));
                res.send(result);
            }
              else {
                res.send({responseCode: "404",
                        reason: "User does not exist or user has no history of orders"});
            }
          });
      });
  });

module.exports = router;  