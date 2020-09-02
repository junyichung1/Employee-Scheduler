var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');
const { route } = require('.');


/* GET users listing. */
router.get('/', isLoggedIn, usersCtrl.index);
router.put('/:id', isLoggedIn, usersCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) {
        res.locals.userID = req.user._id;
        return next();
    } else {
        res.redirect('/auth/google')
    }
}

module.exports = router;
