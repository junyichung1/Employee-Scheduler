var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');
const { route } = require('.');


/* GET users listing. */
router.get('/', usersCtrl.index);
router.put('/:id', usersCtrl.update);


module.exports = router;
