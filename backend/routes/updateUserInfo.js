var express = require('express');
var router = express.Router();
var cors = require('cors')
router.all('*', cors());

const database = require('../config/dbconfig').mysql_pool;


router.post("/", (req, res) => {
    database.getConnection((err, connection) => {
        if (err) throw err;
        console.log("Connected!");
        var sql = "UPDATE user SET firstName = '" + req.body.firstName +
          "', lastName = '" + req.body.lastName +
          "', email = '" + req.body.email +
          "', phoneNumber = '" + req.body.phoneNumber +
          "', password = '" + req.body.password +
          "', address = '" + req.body.address +
          "', zipcode = '" + req.body.zipcode +
          "', creditCardNumber = '" + req.body.cardNumber +
          "', expirationDate = '" + req.body.expiryDate  +
          "', cvc = '" + req.body.cvc +
          "' WHERE email = '" + req.body.email + "'";
        // console.log("sql command to update profile: " + sql);

        connection.query(sql, (error, result) => {
            // When done with the connection, release it.
            console.log(JSON.stringify(result));
            // Handle error after the release.
            if (error) {
                connection.release();
                console.log("updateUserInfo connection released");
                throw err;
            }
            if (result.affectedRows > 0){
                sql = "SELECT * FROM user WHERE firstName = '"+req.body.firstName+"' AND lastName = '"+req.body.lastName+"' AND phoneNumber = '"+req.body.phoneNumber +"'";
                connection.query(sql, function(err, result2){
                    if (err) {
                        connection.release();
                        console.log("updateUserInfo connection released");
                        throw err;
                    }
                    if (result2.length > 0){
                        console.log("1 record update");
                        res.send(result2);
                    }
                });
            }
            else{
                console.log("No matching email, no records updated");
                res.send({responseCode : "404", reason : "Nothing was updated"});
            }
        });
    });
});



module.exports = router;



