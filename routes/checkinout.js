const express = require('express');
const router = express.Router();

const { getAllBookings, updateBooking } = require('../controllers/bookingform-controller');
const { showCheckInOutPage } =require('../controllers/pages-controller');


router.get('/', getAllBookings, showCheckInOutPage)

router.put('/:id', updateBooking)

router.put('/:id', finalBooking)


module.exports = router;