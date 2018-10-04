const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send({ express: 'testing' });
});

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

var mysql = require("mysql");

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
  

/*

app.post('/api/login', (req, res) => {
    console.log("Req");
    console.log(req.param('email'));
    res.json({responseCode: '200'});
});

*/


app.listen(port, () => console.log(`Listening on port ${port}`));