const { Trip } = require('../model');

const prop = (req, res) => {
  const { id } = req.params;
  Property.findOne({ id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = prop;