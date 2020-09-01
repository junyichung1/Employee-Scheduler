var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');
const { route } = require('.');


/* GET users listing. */
router.get('/', usersCtrl.index);
router.put('/:id', usersCtrl.update);
router.get('/new', usersCtrl.new)
router.post('/', usersCtrl.create)

module.exports = router;
