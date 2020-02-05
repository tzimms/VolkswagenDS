const express = require('express');
const router = express.Router();
const { showReservationListPage } =require('../controllers/pages-controller');
const { getAllBookings } = require('../controllers/bookingform-controller');



router.get('/', showReservationListPage, getAllBookings)

module.exports = router;