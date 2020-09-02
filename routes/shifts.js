var express = require('express');
var router = express.Router();
const shiftsCtrl = require('../controllers/shifts');
const { route } = require('./schedules');


router.get('/new', shiftsCtrl.new);
router.post('/', shiftsCtrl.create);

module.exports = router;
