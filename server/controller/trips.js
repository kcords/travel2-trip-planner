const { Trip } = require('../model');

const getTrips = (req, res) => {
  const { id } = req.params;
  Trip.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send().status(500);
    });
};

const createTrip = (req, res) => {
  const { body } = req;
  console.log(body)//!REMOVE THIS!
  const trip = new Trip(body);
  trip.save()
    .then(() => {
      res.send().status(201);
    })
    .catch((err) => {
      console.log(err);
      res.send().status(500);
    });
};

const updateTrip = (req, res) => {
  // const { id } = req.params;
  // Trip.find()
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
         res.send().status(500);
  //   });
};

module.exports = { getTrips, createTrip, updateTrip };