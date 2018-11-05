var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('./server_constants').mysql_pool;
router.all('*', cors());

router.get("/", (req, res, next) => {
      database.getConnection(function(err, connection){
          var sql = "SELECT address, city FROM user WHERE userId = 1";
          connection.query(sql, function(err, result, fields){
              if (err) throw err;
              if (result.length > 0){
                console.log("result: " + JSON.stringify(result));
                res.send(result);
            }
              else {
                  res.send({responseCode: "404"});
            }
          });
      });
  
  });

module.exports = router;  