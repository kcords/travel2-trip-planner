const getTrip = require('./trips');

module.exports = {
  getTrip: (req, res) => getTrip(req, res),
};