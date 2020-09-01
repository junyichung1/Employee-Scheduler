var express = require('express');
var router = express.Router();
const employeesCtrl = require('../controllers/employees')

router.get('/new', employeesCtrl.new);
router.post('/', employeesCtrl.create);

module.exports = router;