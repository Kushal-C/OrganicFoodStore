const express = require('express');
const router = express.Router();
const cors = require('cors')

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());


// /featured route
router.get("/featured", (req, res) => {
    
	database.getConnection((err, connection) => {
		if (err) throw err;  

        connection.query("SELECT productId, productName, description, imageLink, cost, weight, weightUnit FROM `product` ORDER BY rand() LIMIT 10;", (error, result, fields) => {
			// When done with the connection, release it.
			connection.release();
              // Handle error after the release.
          	if (error) throw error;
            console.log("featured connection released");

          	if (result.length > 0) res.send( JSON.stringify(result));
          	else res.send({ responseCode: "404" }); // user not found

        });
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


router.get("/groceries",  (req, res) => {

	database.getConnection((err, connection) => {
		if (err) throw err; 		
        connection.query("SELECT productId, productName, description, imageLink, cost, weight, weightUnit FROM `product` WHERE  category='grocery' LIMIT 10;", (error, result, fields) => {        
            // When done with the connection, release it.
			connection.release();
              // Handle error after the release.
          	if (error) throw error;

        	if (result.length > 0) res.send( JSON.stringify(result));
        	else res.send({ responseCode: "404" }); // user not found
		});  
/*
    console.log("pool config connection limit: ", database.config.connectionLimit); // passed in max size of the pool
    console.log("pool free connections length: ", database._freeConnections.length);    // number of free connections awaiting use
    console.log("pool all connections length: ", database._allConnections.length);  // number of connections currently created, including ones in use
    console.log("pool acquiringConnections.length: ", database._acquiringConnections.length); // number of connections in the process of being acquired
*/
    });
});

router.get("/bakery", (req, res) => {
    database.getConnection((err, connection) => {
		if (err) throw err; 		
        connection.query("SELECT productId, productName, description, imageLink, cost, weight, weightUnit FROM `product` WHERE  category='bakery' LIMIT 10;", (error, result, fields) => {
			// When done with the connection, release it.
			connection.release();
              // Handle error after the release.
          	if (error) throw error;
            console.log("bakery connection released");

            if (result.length > 0) res.send( JSON.stringify(result));
            else res.send({ responseCode: "404" }); // user not found

        });
    });
});


router.get("/drinks", (req, res) => {
    database.getConnection((err, connection) => {
        if (err) throw err; 	
    	connection.query("SELECT productId, productName, description, imageLink, cost, weight, weightUnit FROM `product` WHERE  category='drink' LIMIT 10;", (error, result, fields) => {
			// When done with the connection, release it.
			connection.release();
              // Handle error after the release.
          	if (error) throw error;
            console.log("drinks connection released");

        	if (result.length > 0) res.send( JSON.stringify(result));
        	else res.send({ responseCode: "404" }); // user not found

      	});
    });
});

router.get("/snacks", (req, res) => {
    database.getConnection((err, connection) => {
        if (err) throw err;
        connection.query("SELECT productId, productName, description, imageLink, cost, weight, weightUnit FROM `product` WHERE  category='snack' LIMIT 10;", (error, result, fields) => {
			// When done with the connection, release it.
			connection.release();
              // Handle error after the release.
          	if (error) throw error;
            console.log("snacks connection released");

            if (result.length > 0) res.send( JSON.stringify(result));
            else res.send({ responseCode: "404" }); // user not found
        });     
    });
  });

module.exports = router;  