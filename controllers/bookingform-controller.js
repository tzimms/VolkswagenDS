const Booking = require("../models/Booking");

const getAllBookings = (req, res, next) => {
  console.log("query", req.query);
  Booking.getAll((err, results) => {
    if (err) return next(err);
    req.bookings = results;
    //console.log(results)
    next();
  });
};

const createBooking = (req, res, next) => {
  Booking.create(req.body, err => {
    if (err) return res.render("error", { err });
    res.redirect("/");
  });
};

const updateBooking = (req, res, next) => {
  console.log(req.body)
  Booking.update(+req.params.id, req.body, err => {
    if (err) return res.render("error", { err });
    res.redirect("/checkinout/" +req.params.id);
  });
};

const finalizeBooking = (req, res, next) => {
  Booking.final(+req.params.id, req.body, err => {
    if (err) return res.render("error", { err });
    res.redirect("/reservationlist");
  });
};

const getBookingById = (req, res, next) => {
  Booking.findById(+req.params.id, (err, results) => {
    if (err) return res.render("error", {err});
    req.bookings = results;
    next();
  });
}

module.exports = {
  getAllBookings,
  createBooking,
  updateBooking,
  finalizeBooking,
  getBookingById
};
