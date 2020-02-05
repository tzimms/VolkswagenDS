const express = require('express');
const router = express.Router();

const { getAllBookings } = require('../controllers/bookingform-controller');
const { showCheckInOutPage } =require('../controllers/pages-controller');


router.get('/', getAllBookings, showCheckInOutPage)

module.exports = router;