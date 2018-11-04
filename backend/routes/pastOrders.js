var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('./server_constants').mysql_pool;
router.all('*', cors());

router.get("/pastorders", (req, res, next) => {
    console.log("Login button pressed");
    
      database.getConnection(function(err, connection){
          var sql = "SELECT * FROM cart as c, (SELECT cartId FROM transaction WHERE userId = 1) as d WHERE c.userId = d.cartId";
          connection.query(sql, function(err, result, fields){
              if (err) throw err;
              else {
                console.log(JSON.stringify(fields));
                console.log("results: " + JSON.stringify(result));
                //res.send(JSON.stringify(result));
              }
          });
      });
  
  });

module.exports = router;  