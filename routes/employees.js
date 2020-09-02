var express = require('express');
var router = express.Router();
const employeesCtrl = require('../controllers/employees')

router.get('/employees/new', isLoggedIn, employeesCtrl.new);
router.post('/employees', isLoggedIn, employeesCtrl.create);
router.put('/employees/:id', isLoggedIn, employeesCtrl.update);
router.get('/employees/:id/edit', isLoggedIn, employeesCtrl.edit);
router.delete('/employees/:id', isLoggedIn, employeesCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) {
        res.locals.userID = req.user._id;
        return next();
    } else {
        res.redirect('/auth/google')
    }
}



module.exports = router;