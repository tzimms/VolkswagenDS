const express = require('express');
const router = express.Router();
const { getAllBookings } = require('../controllers/bookingform-controller');
const {  showBookingPage } =require('../controllers/pages-controller');

router.get('/', getAllBookings, showBookingPage)

module.exports = router;