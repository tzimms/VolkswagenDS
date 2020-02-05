const express = require('express');
const router = express.Router();
const { showReservationListPage } =require('../controllers/pages-controller');
const { getAllBookings } = require('../controllers/bookingform-controller');



router.get('/',  getAllBookings, showReservationListPage)

module.exports = router;