const express = require('express');
const router = express.Router();
const { getAllBookings, createBooking } = require('../controllers/bookingform-controller');
const {  showBookingPage } = require('../controllers/pages-controller');
const { getAllVehicle } = require('../controllers/vehicle-controller');

router.get('/', getAllBookings, getAllVehicle, showBookingPage)

router.post('/', createBooking)


module.exports = router;