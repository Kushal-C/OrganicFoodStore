const express = require("express");
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000;
const database = require('./server_constants').mysql_pool;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Add headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/", (req, res) => {
  res.send({ express: "testing" });
});

app.get("/api/login", (req, res) => {
  mysql.createConnection(connection);
  res.send({ express: "Hello From Express" });
  console.log(req.param("Email"));
});


/*
  connection.query('SELECT * from User', function(err, rows, fields) {
  connection.end();
    if (!err)
      console.log('The solution is: ', rows);
    else
      console.log('Error while performing Query.');
  });
  */

app.post("/api/login", (req, res) => {
  console.log("Login button pressed");

  
    database.getConnection(function(err, connection){
    connection.query(
      "SELECT Email, Password \
            FROM `User` \
            WHERE Email='" +
        req.body.loginEmail +
        "' " +
        "AND Password='" +
        req.body.loginPassword +
        "';",
      function(err, result, fields) {
        if (err) throw err;

        if (result.length > 0) res.send({ responseCode: "200" });
        // res.json({responseCode: '200'}); // user found
        else res.send({ responseCode: "404" }); // user not found
      }
    );
    });

  /*
        loginEmail: this.state.loginEmail,
        loginPassword: this.state.loginPassword
    */
});

app.post("/api/register", (req, res) => {
  console.log("Registration button pressed");

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql =
      "INSERT INTO User \
            (FirstName, \
            LastName, \
            Email, \
            Password, \
            CreditCardNumber, \
            SecurityNumber, \
            PhoneNumber) \
            VALUES('" +
      req.body.firstName +
      "', '" + // 'firstName', '
      req.body.lastName +
      "', '" + // lastName', '
      req.body.registrationEmail +
      "', '" +
      req.body.registrationPassword +
      "', '" +
      req.body.creditCardNum +
      "', '" +
      req.body.securityNumber +
      "', '" +
      req.body.phoneNumber +
      "')"; // phoneNumber')
    connection.query(sql, function(err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      connection.end();
    });
  });

  /*
    firstName: this.state.firstName,
    lastName: this.state.LastName,
    registrationEmail: this.state.registrationEmail,
    registrationPassword: this.state.registrationPassword,
    creditCardNum: this.state.creditCardNum,
    securityNumber: this.state.securityNumber,
    phoneNumber: this.state.phoneNumber
    */
});

app.listen(port, () => console.log(`Listening on port ${port}`));
