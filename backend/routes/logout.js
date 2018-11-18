var express = require('express');
var router = express.Router();
var session  = require('express-session');
var cors = require('cors');

const database = require('../config/dbconfig').mysql_pool;
router.all('*', cors());

var passport = require('passport');


router.post('/', function(req, res) {
    req.logout();
    console.log("logged out on server side");
    res.send({responseCode: "200"});
});

module.exports = router;