const showHomepage = (req, res, next) => {
  const bookings = req.bookings;
  const event_data = {
    events :
      bookings.map(event => ({
        name: event.name,
        start_time: event.start_time, 
        end_time: event.end_time,
        year: event.date.getFullYear(),
        month: event.date.getMonth(),
        day: event.date.getDay(),
      })  
     )
    };
  res.render("index", { bookings, event_data });
};

// const showEditPage = (req, res,next) => {
//     res.render("edit", { task: req.task });
// };

const showBookingPage = (req, res, next) => {
  const bookings = req.body;
  const vehicles = req.vehicles;
  const event = {
    name: req.query.event_name,
    start_time: req.query.event_start_time,
    end_time: req.query.event_end_time,
    day: req.query.event_day,
    month: req.query.event_month + 1,
    year: req.query.event_year,
  };
  console.log(event)
  res.render("bookingform", { bookings, event, vehicles});
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
