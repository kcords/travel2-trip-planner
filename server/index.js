// const Booking = require('./booking');
// const Property = require('./property');

// module.exports = { Booking, Property };

const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'dist');

const router = require('./router')
const { db } = require('./database/index');

app.use(cors());
app.use(express.json());
app.use(compression());

app.use(express.static(PUBLIC_DIR));

//!This section can be removed before release!
app.use('/', (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(`HTTP ${req.method} received on ${req.path}`);
  next();
});
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

app.use('/api/', router);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});
