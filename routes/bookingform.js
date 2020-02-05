const express = require('express');
const router = express.Router();
const { getAllBookings, createBooking } = require('../controllers/bookingform-controller');
const {  showBookingPage } =require('../controllers/pages-controller');

router.get('/', getAllBookings, showBookingPage)

router.post('/', createBooking)


module.exports = router;