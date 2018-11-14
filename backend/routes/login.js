var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('./server_constants').mysql_pool;
router.all('*', cors());

router.post("/", (req, res, next) => {
    console.log("Login button pressed");
  
      database.getConnection(function(err, connection){
          if (err) throw err;
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