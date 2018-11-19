var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());

router.post('/', (req, res, next) => {
    database.getConnection(function(err, connection){
        var pId = req.body.productId;
        var q = req.body.quantity;
        var updateProductQuery = "UPDATE product SET quantity = quantity + " + q + " WHERE productId = " + pId;
        connection.query(updateProductQuery, function(err, result){
            connection.release();
            console.log("adminAdd connection released");
           if (err) throw err;
           if (result.affectedRows > 0 && result.warningCount === 0){
               console.log("Successful update of product: " + pId);
               res.send({responseCode : "200"});
           } 
           else {
                res.send({responseCode : "400", reason : "Could not update this product's quantity"});
           }
        });
    });
});

module.exports = router;