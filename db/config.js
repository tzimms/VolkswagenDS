const mysql = require('mysql');
const keys = require('../keys');

const connection = mysql.createConnection({
    host:  'localhost', // address of the server
    user:  '[insert username here]', // username
    password:  '[insert password here]',
    database:  'todo',
});
module.exports = connection;