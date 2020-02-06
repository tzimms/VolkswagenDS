const express = require('express');
const router = express.Router();
const { getAllBookings, createBooking } = require('../controllers/bookingform-controller');
const {  showBookingPage } = require('../controllers/pages-controller');
const { getAllVehicles } = require('../controllers/vehicle-controller');

router.get('/', getAllBookings, getAllVehicles, showBookingPage)

router.post('/', createBooking)


module.exports = router;