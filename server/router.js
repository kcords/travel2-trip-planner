const router = require('express').Router();
const controller = require('./controller');

router.get('/trips', controller.getTrip);

module.exports = router;
