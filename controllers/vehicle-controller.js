const Vehicle = require('../models/Vehicle');

const getAllVehicles = (req, res, next) => {
    Vehicle.getAll((err, results) => {
      if (err) return next(err);
      req.vehicles = results;
      next();
    })
};

    module.exports = { getAllVehicles }