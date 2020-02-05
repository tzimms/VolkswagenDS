const Booking = require('../models/Booking');

const getAllBookings = (req, res, next) => {
    Booking.getAll((err, results) => {
      if (err) return next(err);
      return res.json({ booking: results });
    })
};


    module.exports = { getAllBookings }