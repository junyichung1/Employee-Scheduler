const User = require('../models/user')

module.exports = {
    index,
    update,
    
    
}

function update(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
        if (err) console.log(err);
         res.redirect('/schedules')
    })
    
}
function index(req, res) {
    User.find({}, function(err, user){
        res.render('users/index', {title: 'Welcome to the User Page'})
    })
}