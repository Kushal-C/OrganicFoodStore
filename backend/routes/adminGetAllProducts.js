var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());

router.post('/', (req, res, next) => {
    database.getConnection(function(err, connection){
        var getAllProductsQuery = "SELECT productId, productName, quantity FROM product";
        connection.query(getAllProductsQuery, function(err, result){
            connection.resolve();
            console.log("adminFetchAllProducts connection resolved");
            if (err) throw err;
            if (result.length > 0){
                console.log(JSON.stringify(result));
                res.send(result);
            }
            else{
                res.send({responseCode : "400", reason: "Could not get any product info"});
            }
        });
    });
});

module.exports = router;