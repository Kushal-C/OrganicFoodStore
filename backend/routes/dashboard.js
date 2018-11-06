var express = require('express');
var router = express.Router();
var cors = require('cors')

const database = require('./server_constants').mysql_pool;
router.all('*', cors());

router.get("/", (req, res, next) => {
  
      database.getConnection(function(err, connection){
      connection.query(
        "SELECT productName, cost, weight, weightUnit FROM `product` LIMIT 10;", function(err, result, fields) {
          if (err) throw err;
          //console.log((JSON.stringify(result)));
          if (result.length > 0) res.send( JSON.stringify(result));
          else res.send({ responseCode: "404" }); // user not found
        }
      );
      });

      /*
                name = {item.name}
                description = {item.description}
                image_link = {item.image_link}
                cost = {item.cost}
                weight = {item.weight}
                weight_unit = {item.weight_unit}
                key={index}/>);

      */
  
  });

module.exports = router;  