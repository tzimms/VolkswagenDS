const showHomepage = (req, res, next) => {
  const bookings = req.bookings;
  res.render("index", { bookings });
};

// const showEditPage = (req, res,next) => {
//     res.render("edit", { task: req.task });
// };

const showBookingPage = (req, res, next) => {
  const bookings = req.body;
  const event = {
    name: req.query.event_name,
    time: req.query.event_count,
    // year: req.query.event_year,
    // month: req.query.event_month,
    day: req.query.event_day
  };
  //const event = req.params;
  res.render("bookingform", { bookings, event });
};

const showReservationListPage = (req, res, next) => {
  const bookings = req.bookings;
  res.render("reservationlist", { bookings });
};

const showCheckInOutPage = (req, res, next) => {
  const bookings = req.bookings;
  res.render("checkinout", { bookings });
};

module.exports = {
  showHomepage,
  showBookingPage,
  showReservationListPage,
  showCheckInOutPage
};
