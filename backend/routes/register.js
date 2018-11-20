var express = require('express');
var router = express.Router();
var cors = require('cors')
router.all('*', cors());

const database = require('../config/dbconfig').mysql_pool;


router.post("/", (req, res) => {
    database.getConnection((err, connection) => {
        if (err) throw err;

        // Check if email exists
        connection.query("SELECT * FROM `user` WHERE email='" + req.body.email + "';", (error, result, fields) => {

            if(result){ // Email exists in the database
                
                // Release connection
                connection.release();
                // Handle error after the release.
                if (error) throw error;

                // Send 409 Conflict JSON
                res.send({ responseCode: "409" }); 
            }

            else{ // Email does not exist, create a new account
                const sql = "INSERT INTO user (firstName, lastName, email, phoneNumber, password, address, city, state, zipcode, creditCardNumber, expirationDate, cvc) \
                                VALUES('" +
                                    req.body.firstName + "', '" + // 'firstName', '
                                    req.body.lastName + "', '" + // lastName', '
                                    req.body.email + "', '" +
                                    req.body.phoneNumber  + "', '" +
                                    req.body.password + "', '" +
                                    req.body.address + "', '" +
                                    req.body.city  + "', '" +
                                    req.body.state  + "', '" +
                                    req.body.zipcode  + "', '" +
                                    req.body.cardNumber + "', '" +
                                    req.body.expiryDate  + "', '" +
                                    req.body.cvc + "')";

                connection.query(sql, (error, result) => {
                    // When done with the connection, release it.
                    connection.release();
                    // Handle error after the release.
                    if (error) throw error;
                    console.log("1 record inserted");
                });

            }
        });
     });
});



module.exports = router;