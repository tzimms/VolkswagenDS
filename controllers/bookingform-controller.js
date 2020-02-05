const Booking = require('../models/Booking');

const getAllBookings = (req, res, next) => {
    Booking.getAll((err, results) => {
      if (err) return next(err);
      req.bookings = results;
      return next();
    })
};


const createBooking =  (req, res, next) => {
    Booking.create(req.body, (err) => {
        console.log('hello', err)
		if (err) return res.render('error', { err });
        res.redirect('/');
    })
};

const updateBooking = (req, res, next) => {
    Booking.update(req.params.id, req.body, (err) => {
        console.log('hello', err)
		if (err) return res.render('error', { err });
        res.redirect('/');
    })
};

const finalizeBooking = (req, res, next) => {
    Booking.final(req.params.id, req.body, (err) => {
        console.log('hello', err)
		if (err) return res.render('error', { err });
        res.redirect('/');
    })
};

    module.exports = { getAllBookings, createBooking, updateBooking, finalizeBooking }