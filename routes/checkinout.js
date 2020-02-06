const express = require('express');
const router = express.Router();

const { getBookingById, updateBooking, finalizeBooking } = require('../controllers/bookingform-controller');
const { showCheckInOutPage } =require('../controllers/pages-controller');

router.get('/:id', getBookingById, showCheckInOutPage)

router.post('/update/:id', updateBooking)

router.post('/final/:id', finalizeBooking)


module.exports = router;