const Vehicle = require('../models/Vehicle');

const getAllVehicle = (req, res, next) => {
    Vehicle.getAll((err, results) => {
      if (err) return next(err);
      req.vehicle = results;
      next();
    })
};

    module.exports = { getAllVehicle }