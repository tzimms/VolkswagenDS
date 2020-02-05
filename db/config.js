const mysql = require('mysql');
const keys = require('../keys');

const connection = mysql.createConnection({
    host: keys.MYSQL_HOST, // address of the server
    user: keys.MYSQL_USERNAME,
    password: keys.MYSQL_PASSWORD,
    database: keys.MYSQL_DATABASE,
});
module.exports = connection;
