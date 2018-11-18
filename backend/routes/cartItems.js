var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());

router.post('/', (req, res, next) => {
    database.getConnection(function(err, connection){
        var cId = req.body.cartId;
        var itemsQuery = "SELECT p.productId as productId, p.productName as name, p.description as description, c.quantity as number, p.cost * c.quantity as 'cost', p.weight * c.quantity as 'weight', p.weightUnit as weight_unit \
                            FROM product as p, (SELECT cartId, productId as pId, quantity FROM cart WHERE cartId = " + cId + ") as c WHERE p.productId = c.pId AND c.cartId = " + cId + " GROUP BY name";
        connection.query(itemsQuery, function(err, result){
            if (err) throw err;
            if (result.length > 0){
                var price=0, totalWeight=0;
                result.forEach(item => {
                    price += item.cost;
                    totalWeight += item.weight ;
                });
                price.toFixed(2);
                totalWeight.toFixed(2);
                var tax = (price*.1).toFixed(2);
                var total_cost = (parseFloat(price)+parseFloat(tax)).toFixed(2);
                res.send({items: result,
                            price: price,
                            tax: tax,
                            total_cost: total_cost,
                            total_weight: totalWeight});
            }
            else{
                res.send({responseCode : "404",
                                reason : "No such cartId"});
            }
        });
    })
});

module.exports = router;