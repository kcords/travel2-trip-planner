const mongoose = require('mongoose');

mongoose.connect('mongodb://database/fec', { useNewUrlParser: true, useUnifiedTopology: true })
  // eslint-disable-next-line no-console
  .then(() => console.log('Successfully connected to MongoDB!'))
  // eslint-disable-next-line no-console
  .catch((err) => console.log('Error connecting to the database.', err));

// const db = mongoose.connection;

// const photoSchema = new mongoose.Schema({
//   listingId: {
//     type: Number,
//     required: true,
//   },
//   photos: [
//     {
//       id: {
//         type: Number,
//         required: true,
//       },
//       thumbnailUrl: {
//         type: String,
//         required: true,
//       },
//       imageUrl: {
//         type: String,
//         required: true,
//       },
//       description: {
//         type: String,
//         required: true,
//       },
//       room: {
//         type: String,
//         default: 'Living area',
//         required: true,
//       },
//     },
//   ],
// });

// const PhotoCollection = mongoose.model('Photo', photoSchema);

// const getPhotos = (id) => (
//   PhotoCollection.find({ listingId: id })
// );

// module.exports = {
//   PhotoCollection,
//   db,
//   getPhotos,
// };
