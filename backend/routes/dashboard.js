const express = require('express');
const router = express.Router();
const cors = require('cors')

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());


// /featured route
router.get("/featured", (req, res, next) => {
  
      database.getConnection(function(err, connection){
      connection.query(
        "SELECT productName, description, imageLink, cost, weight, weightUnit FROM `product` LIMIT 10;", function(err, result, fields) {
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


  router.get("/groceries", (req, res, next) => {
  
    database.getConnection(function(err, connection){
    connection.query(
      "SELECT productName, description, imageLink, cost, weight, weightUnit FROM `product` WHERE  category='grocery' LIMIT 10;", function(err, result, fields) {
        if (err) throw err;
        //console.log((JSON.stringify(result)));
        if (result.length > 0) res.send( JSON.stringify(result));
        else res.send({ responseCode: "404" }); // user not found
      }
    );
    });
  });

  router.get("/bakery", (req, res, next) => {
  
    database.getConnection(function(err, connection){
    connection.query(
      "SELECT productName, description, imageLink, cost, weight, weightUnit FROM `product` WHERE  category='bakery' LIMIT 10;", function(err, result, fields) {
        if (err) throw err;
        //console.log((JSON.stringify(result)));
        if (result.length > 0) res.send( JSON.stringify(result));
        else res.send({ responseCode: "404" }); // user not found
      }
    );
    });
  });

  router.get("/drinks", (req, res, next) => {
  
    database.getConnection(function(err, connection){
    connection.query(
      "SELECT productName, description, imageLink, cost, weight, weightUnit FROM `product` WHERE  category='drink' LIMIT 10;", function(err, result, fields) {
        if (err) throw err;
        //console.log((JSON.stringify(result)));
        if (result.length > 0) res.send( JSON.stringify(result));
        else res.send({ responseCode: "404" }); // user not found
      }
    );
    });
  });

  router.get("/snacks", (req, res, next) => {
  
    database.getConnection(function(err, connection){
    connection.query(
      "SELECT productName, description, imageLink, cost, weight, weightUnit FROM `product` WHERE  category='snack' LIMIT 10;", function(err, result, fields) {
        if (err) throw err;
        //console.log((JSON.stringify(result)));
        if (result.length > 0) res.send( JSON.stringify(result));
        else res.send({ responseCode: "404" }); // user not found
      }
    );
    });
  });





module.exports = router;  