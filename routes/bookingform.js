const express = require('express');
const router = express.Router();
const { getAllBookings } = require('../controllers/bookingform-controller');
const {  showBookingPage } = require('../controllers/pages-controller');
const { getAllVehicle } = require('../controllers/vehicle-controller');

router.get('/', getAllBookings, getAllVehicle, showBookingPage)

module.exports = router;