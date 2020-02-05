const connection = require('../db/config');

class Vehicle {
    constructor(){

    }
};



Vehicle.getAll = (callback) => {
    connection.query(
        'select * vehicle todo', 
        (err, results, fields) => {
            callback(err, results, fields)
        }
    )

}

Vehicle.create = (taskInfo, callback) => {
    connection.query(
        'INSERT INTO vehicle SET ?',
        taskInfo, 
        (err, results, fields) => {
            callback(err, results, fields)
        }
    )

}

module.exports = Vehicle;