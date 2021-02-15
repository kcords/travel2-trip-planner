const router = require('express').Router();
const controller = require('./controller');

router.get('/trips/:user/', controller.getTrip);

module.exports = router;
