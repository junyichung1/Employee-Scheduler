const User = require('../models/user')

module.exports = {
    index,
    update,
    create,
    new: newTime
    
}
function newTime(req, res) {
    let shifts = new User(req.body)
    console.log(shifts)
    res.render('users/new', {title:'Add Shifts', shifts})
}

function create(req, res) {
    req.user.times.push(req.body)
    req.user.save(function(err) {
        res.redirect('/users/new')
    })

}
function update(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
        if (err) console.log(err);
        
        res.render('schedules/index', { title: "Schedule" })
    })
    console.log(req.user)
}
function index(req, res) {
    console.log(req.user)
    User.find({}, function(err, user){
        res.render('users/index', {title: 'Welcome to the User Page'})
    })
}