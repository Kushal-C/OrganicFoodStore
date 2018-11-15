var mysql = require("mysql");

const connection  = {
    mysql_pool : mysql.createPool({
    host: "cs160ofs.cmt56mnoetvw.us-west-1.rds.amazonaws.com",
    user: "masterUsername",
    password: "organicfs160",
    database: "innodb"
    })
};

module.exports = connection;