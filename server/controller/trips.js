const { Trip } = require('../model');

const trips = (req, res) => {
  const { id } = req.params;
  Trip.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = trips;