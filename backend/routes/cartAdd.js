var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());

router.get('/', (req, res, next) => {
    database.getConnection(function(err, connection){
        var pId = req.body.productId;
        var q = req.body.quantity;
        var uId = req.body.userId;
        var checkMaxCartId = "SELECT MAX(cartId) as maxCartId, transactionId FROM cart WHERE transactionId = 0";
        connection.query(checkMaxCartId, function(err, result){
            console.log("result: " + JSON.stringify(result));
            console.log("result.maxCartId: " + JSON.stringify(result[0].maxCartId));
            var maxCartId = result[0].maxCartId;
            if (err) throw err;
            if (result[0].transactionId === 0){
                var insertProductExistingCart = "INSERT INTO cart (cartId, productId, quantity, userId, total_weight, total_cost) \
                                                VALUES (" + maxCartId + ", " 
                                                + pId + ", "
                                                + q + ", "
                                                + uId + ", "
                                                + "(SELECT p.weight * " + q + " as 'total_weight' FROM product p WHERE p.productId = " + pId + " LIMIT 1), \
                                                (SELECT p.cost * " + q + " as 'total_cost' FROM product p WHERE p.productId = " + pId + " LIMIT 1))";
                connection.query(insertProductExistingCart, function(err, result2){
                    if (err) throw err;
                    console.log("Successful cart inserted");
                    res.send({cartId: maxCartId});
                });
            }
            else if (result[0].transactionId !== 0){
                checkMaxCartId = "SELECT MAX(cartId) as maxCartId FROM cart";
                connection.query(checkMaxCartId, function(err, result3){
                    if (err) throw err;
                    // console.log("new maxCartId: " +JSON.stringify(result3));
                    var maxCartId = result3[0].maxCartId + 1;
                    var insertProductNewCart = "INSERT INTO cart (cartId, productId, quantity, userId, total_weight, total_cost) \
                                            VALUES (" + maxCartId + ", " 
                                            + pId + ", "
                                            + q + ", "
                                            + uId + ", "
                                            + "(SELECT p.weight * " + q + " as 'total_weight' FROM product p WHERE p.productId = " + pId + " LIMIT 1), \
                                            (SELECT p.cost * " + q + " as 'total_cost' FROM product p WHERE p.productId = " + pId + " LIMIT 1))";
                    connection.query(insertProductNewCart, function(err, result4){
                        if (err) throw err;
                        console.log("Successful new cart inserted");
                        res.send({cartId: maxCartId});
                    });
                });
            }
            else{
                res.send({responseCode: "404", reason: "No cartIds"});
            }
        });
    });
});

module.exports = router;