const router = require('express').Router();
const controller = require('./controller');

router.get('/trips', controller.getTrips);
router.post('/trips', controller.createTrip);
router.put('/trips/:id', controller.updateTrip);

module.exports = router;
