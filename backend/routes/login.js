var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('./server_constants').mysql_pool;
router.all('*', cors());

router.post('/', passport.authenticate('local-login', {
  successRedirect : '/profile', // redirect to the secure profile section
  failureRedirect : '/login', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}),
function(req, res) {
  console.log("hello");

  database.getConnection(function(err, connection){
    connection.query(
      "SELECT * FROM `user` WHERE email='" + req.body.loginEmail +
            "' " + "AND password='" + req.body.loginPassword +
            "';", function(err, result, fields) {
        if (err) throw err;
        console.log((JSON.stringify(result)));
        if (result.length > 0) res.send( JSON.stringify(result));
        else res.send({ responseCode: "404" }); // user not found
      }
    );
    });

  if (req.body.remember) {
    req.session.cookie.maxAge = 1000 * 60 * 3;
  } else {
    req.session.cookie.expires = false;
  }
});

router.post("/", (req, res, next) => {
    console.log("Login button pressed");
  
      database.getConnection(function(err, connection){
      connection.query(
        "SELECT * FROM `user` WHERE email='" + req.body.loginEmail +
              "' " + "AND password='" + req.body.loginPassword +
              "';", function(err, result, fields) {
          if (err) throw err;
          console.log((JSON.stringify(result)));
          if (result.length > 0) res.send( JSON.stringify(result));
          else res.send({ responseCode: "404" }); // user not found
        }
      );
      });
  
  });

module.exports = router;  