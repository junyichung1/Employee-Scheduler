const User = require('../models/user')

module.exports = {
    index
}

function index(req, res) {
    User.find({}, function(err, user){
        console.log(req.user)
        res.render('users/index', {title: 'Welcome to the User Page'})
    })
}