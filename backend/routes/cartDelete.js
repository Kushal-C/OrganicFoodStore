var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());

router.post('/', (req, res, next) => {
    database.getConnection(function(err, connection){
        var cId = req.body.cartId;
        var q = req.body.quantity;
        var uId = req.body.userId;
        var pId = req.body.productId;
        var deleteFromCart = "SELECT quantity FROM cart WHERE cartId = " + cId + " AND productId = " + pId;
        connection.query(deleteFromCart, function(err, result){
            if (err) {
                connection.release();
                console.log("cartDelete connection released");
                throw err;
            }
            if (result.length > 0) {
                var cartQuantity = result[0].quantity;
                // console.log("cartQuantity: " +cartQuantity);
                // console.log("q: " + q);
                // console.log("remaining q: " + (cartQuantity - q));
                var remainingQuantity = cartQuantity - q;
                // console.log(remainingQuantity);
                (remainingQuantity > 0) ? 
                    connection.query("UPDATE cart SET quantity = " + remainingQuantity + " WHERE cartId = " + cId + " AND  productId = " + pId + " AND userId = " + uId, function(err, result){    
                        if (err) throw err;
                        console.log("Successful removal of items from cart");
                        res.send({responseCode: "200"});
                    }) 
                    :
                    connection.query("SET SQL_SAFE_UPDATES = 0", function(err, result){
                        if (err) {
                            connection.release();
                            console.log("cartDelete connection released");
                            throw err;
                        }
                        connection.query("DELETE FROM cart WHERE cartId = " + cId + " AND productId = " + pId + " AND userId = " + uId, function(err, result){
                            if (err){
                                connection.query("SET SQL_SAFE_UPDATES = 1", function(err, result){
                                    if (err){
                                        connection.release();
                                        console.log("ERROR, SQL_SAFE_UPDATE re-enabled");
                                        res.send({responseCode: "404"});
                                        throw err;
                                    }
                                });
                            }
                        else{
                            connection.query("SET SQL_SAFE_UPDATES = 1", function(err, result){
                                if (err) {
                                    connection.release();
                                    console.log("cartDelete connection released");
                                    throw err;
                                }
                                console.log("SUCCESS, SQL_SAFE_UPDATE re-enabled");
                                console.log("Successful removal of entire item from cart");  
                                res.send({responseCode: "200"});
                            });
                        }
                    }); 
                })
            }
            else{
                res.send({responseCode: "404", reason: "Invalid productId or cartId"});
            }
            connection.release();
            console.log("cartDelete connection released");
        });
    });
});

module.exports = router;