var express = require('express');
var router = express.Router();
var session  = require('express-session');
var cors = require('cors');

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());

var passport = require('passport');

router.post('/', passport.authenticate('local-login', {
  failureFlash : true // allow flash messages
}),
function(req, res) {
  console.log("User Authenticated.");

/* This is if a remember me function is added to the front end
  if (req.body.remember) {
    console.log("reaches the if req.body.remember");
    req.session.cookie.maxAge = 24 * 60 * 60 * 1000; // 1 day in milliseconds
  } else {
    console.log("does not reach req.body.");
    req.session.cookie.expires = false;
  }
*/

  database.getConnection(function(err, connection){
    connection.query(
      "SELECT * FROM `user` WHERE email='" + req.user.email + "';", function(err, result, fields) {
        if (err) throw err; 
        //console.log((JSON.stringify(req.user.email)));
        if (result.length > 0) res.send( JSON.stringify(result));
        else res.send({ responseCode: "404" }); // user not found
      }
    );
    connection.end();
    });
});

module.exports = router;  