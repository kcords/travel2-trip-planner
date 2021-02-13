const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
// const { getPhotos } = require('../database/index.js');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'dist');

app.use(compression());
app.use(cors());
app.use(express.json());

app.use('/', (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(`HTTP ${req.method} received on ${req.path}`);
  next();
});

// app.get('/api/home/:id/photos', (req, res) => {
//   const { id } = req.params;
//   getPhotos(id)
//     .then((results) => res
//       .send(results)
//       .status(200)
//       .set('Cache-Control', 'public, max-age=31557600'))
//     .catch(() => res.status(500));
// });

app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});
