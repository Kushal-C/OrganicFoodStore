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

/*
var connection = mysql.createConnection({
    host     : '',
    user     : 'masterUsername',
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

  connection.query('SELECT * from Users', function(err, rows, fields) {
  connection.end();
    if (!err)
      console.log('The solution is: ', rows);
    else
      console.log('Error while performing Query.');
  });

*/




app.post('/api/login', (req, res) => {


    console.log("Login button pressed");
    console.log(req.body.email);
    console.log(req.body.password);
    res.json({responseCode: '200'});
});




app.listen(port, () => console.log(`Listening on port ${port}`));