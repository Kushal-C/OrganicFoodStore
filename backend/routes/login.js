var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('./server_constants').mysql_pool;
router.all('*', cors());

router.post("/", (req, res, next) => {
    console.log("Login button pressed");
  
      database.getConnection(function(err, connection){
      connection.query(
        "SELECT Email, Password FROM `User` WHERE Email='" + req.body.loginEmail +
              "' " + "AND Password='" + req.body.loginPassword +
              "';", function(err, result, fields) {
          if (err) throw err;
          console.log(result);
          if (result.length > 0) res.send( { responseCode: "200" });
          else res.send({ responseCode: "404" }); // user not found
        }
      );
      });
  
  });

module.exports = router;  