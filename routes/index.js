const express = require('express');
const router = express.Router();
const { showHomepage } = require('../controllers/pages-controller');
const { getAllBookings } = require('../controllers/bookingform-controller');

/* GET home page. */
router.get('/', getAllBookings, showHomepage)

module.exports = router;
