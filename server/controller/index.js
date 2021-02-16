const { getTrips, createTrip, updateTrip } = require('./trips');

module.exports = {
  getTrips: (req, res) => getTrips(req, res),
  createTrip: (req, res) => createTrip(req, res),
  updateTrip: (req, res) => updateTrip(req, res),
};