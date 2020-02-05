const Booking = require('../models/Booking');

const getAllBookings = (req, res, next) => {
    Booking.getAll((err, results) => {
      if (err) return next(err);
      req.bookings = results;
      return next();
    })
};

    module.exports = { getAllBookings }