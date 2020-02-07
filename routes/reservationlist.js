const express = require('express');
const router = express.Router();
const { showReservationListPage } =require('../controllers/pages-controller');
const { getAllBookings, deleteBooking } = require('../controllers/bookingform-controller');


router.get('/',  getAllBookings, showReservationListPage)

router.post('/delete/:id', deleteBooking)

module.exports = router;