var express = require('express');
var router = express.Router();
var cors = require('cors')
router.all('*', cors());

const database = require('../config/dbconfig').mysql_pool;


router.post("/", (req, res, next) => {
    console.log("Registration button pressed");
  
    database.getConnection(function(err, connection){
      console.log("Connected!");
      var sql =
        "INSERT INTO user \
              (firstName, \
              lastName, \
              email, \
              phoneNumber, \
              password, \
              address, \
              city, \
              state, \
              zipcode, \
              creditCardNumber, \
              expirationDate, \
              cvc) \
              VALUES('" +
        req.body.firstName +
        "', '" + // 'firstName', '
        req.body.lastName +
        "', '" + // lastName', '
        req.body.email +
        "', '" +
        req.body.phoneNumber  + 
        "', '" +
        req.body.password +
        "', '" +
        req.body.address  + 
        "', '" +
        req.body.city  + 
        "', '" +
        req.body.state  + 
        "', '" +
        req.body.zipcode  + 
        "', '" +
        req.body.cardNumber +
        "', '" +
        req.body.expiryDate  + 
        "', '" +
        req.body.cvc +
        "')";
      connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        connection.end();
      });
    });

  });



module.exports = router;