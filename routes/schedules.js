var express = require('express');
var router = express.Router();
const schedulesCtrl = require('../controllers/schedules')

router.get('/', isLoggedIn, schedulesCtrl.index);
// router.get('/new', schedulesCtrl.new);
// router.post('/', schedulesCtrl.create);

router.get('/new', schedulesCtrl.new);
router.post('/', schedulesCtrl.create);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google')
}

module.exports = router;
