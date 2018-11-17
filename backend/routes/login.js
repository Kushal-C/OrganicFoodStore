var express = require('express');
var router = express.Router();
var session  = require('express-session');
var cors = require('cors');

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());

var passport = require('passport');


router.post('/', passport.authenticate('local-login', {
    failureFlash : true // allow flash messages
    }), (req, res) => {
    console.log("User Authenticated.");

    database.getConnection(function(err, connection){
        if (err) throw err;  
        connection.query("SELECT * FROM `user` WHERE email='" + req.user.email + "';", (error, result, fields) => {
            // When done with the connection, release it.
            connection.release();
            // Handle error after the release.
            if (error) throw error;
            console.log("login connection released");

            //console.log((JSON.stringify(req.user.email)));
            if (result.length > 0) res.send( JSON.stringify(result));
            else res.send({ responseCode: "404" }); // user not found
        
        });
    });
});

module.exports = router;  