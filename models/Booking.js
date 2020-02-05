const connection = require('../db/config');

const Booking = {}

Booking.getAll = (callback) => {
    connection.query(
        'select * from booking', 
        (err, results, fields) => callback(err, results, fields)
    );
};

Booking.create = (bookingInfo, callback) => {
    connection.query(
        `INSERT INTO booking (name, date, start_time, end_time, destination, vehicle_id)  
         VALUES (
            ?,
            ?,
            ?,
            ?
        )`,
        [bookingInfo.name, bookingInfo.date, bookingInfo.start_time, bookingInfo.end_time, bookingInfo.destination, +bookingInfo.vehicle_id],
        (err, results, fields) => callback(err, results, fields)
    );
};
    

Booking.update = (id, taskInfo, callback) => {
    const sql = `UPDATE booking
     SET ?
     WHERE id = ?`;
    connection.query(sql, [taskInfo, id], (err, results) => {
        callback(err, results);
    },
    );
};


module.exports = Booking;