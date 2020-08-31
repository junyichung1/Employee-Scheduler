var express = require('express');
var router = express.Router();
const schedulesCtrl = require('../controllers/schedules')

router.get('/', schedulesCtrl.index);
router.get('/new', schedulesCtrl.new);

module.exports = router;