var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());

router.get('/', (req, res, next) => {
    database.getConnection(function(err, connection){
        // console.log(req.body.userId);
        var uId = req.body.userId;
        var getCartIdQuery = "SELECT cartId FROM cart WHERE userId = " + uId + " AND transactionId = 0";
        connection.query(getCartIdQuery, function(err, result){
            connection.release();
            console.log("cartGetId connection released");
            if (err) throw err;
            if (result.length > 0){
                console.log("result:" +JSON.stringify(result))
                res.send({cartId: result[0].cartId});
            }
            else{
                res.send({responseCode: "404",
                        reason: "No active cart for current userId"});
            }
        });
    });
});

module.exports = router;