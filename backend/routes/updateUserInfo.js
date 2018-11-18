var express = require('express');
var router = express.Router();
var cors = require('cors')
router.all('*', cors());

const database = require('../config/dbconfig').mysql_pool;


router.post("/", (req, res) => {
    database.getConnection((err, connection) => {
        if (err) throw err;
        console.log("Connected!");
        const sql = "UPDATE user SET firstName = '" + req.body.firstName +
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
            connection.release();
            console.log("updateUserInfo connection released");
            // Handle error after the release.
            if (error) throw err;
            if (result.affectedRows > 0){
                console.log("1 record updated");
                res.send({responseCode : "200"});  
            }
            else{
                console.log("No matching email, no records updated");
                res.send({responseCode : "404", reason : "Nothing was updated"});
            }
        });
    });
});



module.exports = router;



