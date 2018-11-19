var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());

// Validates a shopping cart by adding a transaction (the order is confirmed by user)
router.post('/', function(req, res, next) {
    // console.log("req: " + JSON.stringify(req.body))
    // console.log("req item size: " +  req.body.items.length)
    var uId = req.body.userId;
    database.getConnection(function(err, connection){
        var maxCartAndTransactionQuery = "SELECT MAX(cartId) as maxC FROM cart WHERE transactionId = 0 AND userId = " + uId;
        connection.query(maxCartAndTransactionQuery, function(err, result){
            if (err) {
                // connection.release();
                // console.log("shoppingCart connection released");
                throw err;
            }
            if (result.length > 0){
                var getMaxTransactionIdQuery = "SELECT MAX(transactionId) as tId FROM transaction";
                connection.query(getMaxTransactionIdQuery, function(err, result2){
                    if (err) {
                        // connection.release();
                        // console.log("shoppingCart connection released");
                        throw err;
                    }
                    if (result2.length > 0){
                        var nextTransactionId = parseInt(result2[0].tId) + 1;
                        var createTransactionQuery = "INSERT INTO transaction (transactionId, cartId, userId, status) \
                                                      VALUES (" + nextTransactionId + ", " 
                                                                + result[0].maxC + ", "
                                                                + uId + ", "
                                                                + "'in progress')";
                        connection.query(createTransactionQuery, function(err, result3){
                            if (err) {
                                // connection.release();
                                // console.log("shoppingCart connection released");
                                throw err;
                            }
                            console.log("real res3: "+JSON.stringify(result3));
                            if (result3.affectedRows > 0 && result3.warningCount === 0){
                                console.log("Transaction created");
                                var updateTransactionIdOfCartQuery = "UPDATE cart SET transactionId = " + nextTransactionId +
                                                                     " WHERE cartId = " + result[0].maxC + " AND userId = " + uId;
                                connection.query(updateTransactionIdOfCartQuery, function(err, result4){
                                    if (err){
                                        // connection.release();
                                        // console.log("shoppingCart connection released");
                                        throw err;
                                    }
                                    if (result4.affectedRows > 0 && result4.warningCount === 0){
                                        console.log("TransactionId changed from 0 to " + nextTransactionId);
                                        res.send({responseCode : "200"});
                                    }
                                    else {
                                        res.send({responseCode : "404", reason : "No carts pending order confirmation"});
                                    }
                                });
                            }
                        });
                       
                    }
                });
                // res.send({responseCode: "200"})
            }
            else {
              res.send({responseCode: "404", reason : "No carts pending order confirmation"});
            }
        });
        connection.release();
        console.log("shoppingCart connection released");
    });
});

module.exports = router;


                // var nextCartId = result[0].maxC + 1;
                // var nextTransactionId = result[0].maxT + 1;
                // var insertItemsQuery, pid, q;
                // var uid = req.body.items[0].userId;
                // var insertTransactionQuery = "INSERT INTO transaction(transactionId, cartId, userId) VALUES (" + nextTransactionId + ", " + nextCartId + ", " + uid + ")"
                // connection.query(insertTransactionQuery, function(err){
                //     if (err) {
                //         connection.release();
                //         console.log("shoppingCart connection released");
                //         throw err;
                //     }
                //     console.log("Successful transaction insert");
                // });
                // for (var i = 0; i < req.body.items.length; i++){
                //     pid = req.body.items[i].productId;
                //     q = req.body.items[i].quantity;
                //     insertItemsQuery = "INSERT INTO cart (cartId, transactionId, productId, quantity, userId, total_weight, total_cost) VALUES (" + nextCartId + ", "
                //                         + nextTransactionId + ", "
                //                         + pid + ", "
                //                         + q + ", "
                //                         + uid + ", \
                //                         (SELECT p.weight * " + q + " as 'totalWeight' FROM product p WHERE p.productId = " + pid +" LIMIT 1),\
                //                         (SELECT p.cost * " + q + " as 'totalCost' FROM product p WHERE p.productId = " + pid + " LIMIT 1))";
                //     connection.query(insertItemsQuery, function(err){
                //         if (err) {
                //             connection.release();
                //             console.log("shoppingCart connection released");
                //             throw err;
                //         }
                //         console.log("Successful cart insert");
                //     });
                // }