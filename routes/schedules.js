var express = require('express');
var router = express.Router();
const schedulesCtrl = require('../controllers/schedules')

router.get('/', isLoggedIn, schedulesCtrl.index);
// router.get('/new', schedulesCtrl.new);
// router.post('/', schedulesCtrl.create);

// router.get('/new', isLoggedIn, schedulesCtrl.new);
router.post('/', isLoggedIn, schedulesCtrl.create);
router.get('/:id', schedulesCtrl.show);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) {
        res.locals.userID = req.user._id;
        return next();
    } else {
        res.redirect('/auth/google')
    }
}

module.exports = router;
