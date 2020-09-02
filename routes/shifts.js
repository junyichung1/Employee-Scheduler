var express = require('express');
var router = express.Router();
const shiftsCtrl = require('../controllers/shifts');
const { route } = require('./schedules');
const shift = require('../models/shift');


router.get('/new', isLoggedIn, shiftsCtrl.new);
router.post('/', shiftsCtrl.create);
router.get('/:id/edit', shiftsCtrl.edit);
router.put('/:id', shiftsCtrl.update);
router.delete('/:id', shiftsCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) {
        res.locals.userID = req.user._id;
        return next();
    } else {
        res.redirect('/auth/google')
    }
}

module.exports = router;
