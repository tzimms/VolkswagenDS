const connection = require('../db/config');

const Vehicle = {}


Vehicle.getAll= (callback) => {
    connection.query(
        'select * from vehicle', 
        (err, results, fields) => callback(err, results, fields)
    );

}


module.exports = Vehicle;