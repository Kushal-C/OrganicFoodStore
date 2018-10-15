const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({ express: 'testing' });
});

app.get('/api/login', (req, res) => {
    res.send({ express: 'Hello From Express' });
    console.log(req.param('Email'));
});



var mysql = require("mysql");

var connection = mysql.createConnection({
    host     : '',
    user     : '',
    password : '',
    database : ''
  });
 
  connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");    
    } else {
        console.log(err);    
    }
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

app.post('/api/login', (req, res) => {

    console.log("Login button pressed");

    connection = mysql.createConnection({
        host     : '',
        user     : '',
        password : '',
        database : ''
      });

    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT Email, Password \
            FROM `User` \
            WHERE Email='" + req.body.loginEmail + "' " +
                "AND Password='" + req.body.loginPassword + "';", function (err, result, fields) {
          if (err) throw err;
          if(result.length > 0) console.log(result[0]);
          else console.log("User Not Found");        
        });
      });

    /*
        loginEmail: this.state.loginEmail,
        loginPassword: this.state.loginPassword
    */
      
    res.json({responseCode: '200'});
});

app.post('/api/register', (req, res) => {

    console.log("Registration button pressed");

    connection = mysql.createConnection({
        host     : '',
        user     : '',
        password : '',
        database : ''
      });

    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO User \
            (FirstName, \
            LastName, \
            Email, \
            Password, \
            CreditCardNumber, \
            SecurityNumber, \
            PhoneNumber) \
            VALUES('" + 
            req.body.firstName + "', '" +   // 'firstName', '
            req.body.lastName + "', '" +    // lastName', '
            req.body.registrationEmail + "', '" +
            req.body.registrationPassword + "', '" +
            req.body.creditCardNum + "', '" +
            req.body.securityNumber + "', '" +
            req.body.phoneNumber + "')";        // phoneNumber')
        connection.query(sql, function (err, result) {
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

    res.json({responseCode: '200'});
});



app.listen(port, () => console.log(`Listening on port ${port}`));