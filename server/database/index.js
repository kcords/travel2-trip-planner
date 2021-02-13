const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mvp', { useNewUrlParser: true, useUnifiedTopology: true })
  // eslint-disable-next-line no-console
  .then(() => console.log('Successfully connected to MongoDB!'))
  // eslint-disable-next-line no-console
  .catch((err) => console.log('Error connecting to the database.', err));

const db = mongoose.connection;

module.exports = db;
