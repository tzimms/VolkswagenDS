const express = require('express');
const router = express.Router();
const { getAllBookings } = require('../controllers/bookingform-controller');


router.get('/', getAllBookings)

module.exports = router;