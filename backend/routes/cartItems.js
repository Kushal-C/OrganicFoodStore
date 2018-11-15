var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());

router.get('/', (req, res, next) => {
    database.getConnection(function(err, connection){
        console.log(JSON.stringify(req.body))
        var itemsQuery = "SELECT p.productName, p.description, p.imageLink, p.cost * c.quantity as 'cost', p.weight * c.quantity as 'weight' \
                            FROM product as p, (SELECT cartId, productId as pId, quantity FROM cart WHERE cartId = " + req.body.cartId + ") as c WHERE p.productId = c.pId AND c.cartId = " + req.body.cartId;
        connection.query(itemsQuery, function(err, result){
            if (err) throw err;
            if (result.length > 0){
                res.send(result);
            }
            else{
                res.send({responseCode : "404",
                                reason : "No such cartId"});
            }
        });
    })
});

module.exports = router;