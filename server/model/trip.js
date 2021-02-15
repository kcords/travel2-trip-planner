const { Schema, model } = require('mongoose');

const tripSchema = new Schema({
  tripName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: Date.now
  },
  destinations: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    required: false,
  },
  entry: {
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: false,
      },
      notes: {
        type: String,
        required: false,
      },
    required: false,
  },
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;
