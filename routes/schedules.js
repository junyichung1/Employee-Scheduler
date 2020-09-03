var express = require('express');
var router = express.Router();
const schedulesCtrl = require('../controllers/schedules');
const { route } = require('.');

router.get('/schedules', isLoggedIn, schedulesCtrl.index);
router.post('/schedules', isLoggedIn, schedulesCtrl.create);
router.get('/schedulize/:id', schedulesCtrl.show);
router.put('/schedulize/:id', schedulesCtrl.update);
router.delete('/schedulize/:id/employee/:emp', schedulesCtrl.deleteShift);
router.delete('/schedules/:id', schedulesCtrl.deleteSchedule);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) {
        res.locals.userID = req.user._id;
        return next();
    } else {
        res.redirect('/auth/google')
    }
}

module.exports = router;
