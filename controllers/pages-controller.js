const showHomepage = (req, res, next) => {
    const bookings = req.bookings;
    res.render('index', { bookings });
}

// const showEditPage = (req, res,next) => {
//     res.render("edit", { task: req.task });
// };

const showBookingPage = (req, res,next) => {
    const bookings = req.bookings; 
    res.render('bookingform', { bookings });
};

const showReservationListPage = (req, res,next) => {
    const bookings = req.bookings; 
    res.render('reservationlist', { bookings });
};

const showCheckInOutPage = (req, res,next) => {
    const bookings = req.bookings; 
    res.render('checkinout', { bookings });
};

module.exports = { showHomepage, showBookingPage, showReservationListPage, showCheckInOutPage };