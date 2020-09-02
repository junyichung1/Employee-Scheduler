const User = require('../models/user')
const Schedule = require('../models/schedule')
const Shift = require('../models/shift')

module.exports = {
    new: newTime,
    create
}

function newTime(req, res) {
    Shift.find({}, function(err, shifts) {
        console.log(`hellooooooooo`,shifts)
        res.render('shifts/new', {title:'Add Shifts', shifts})
    })
}

function create(req, res) {
    console.log(`yo0o0o0oo0`)
    const newShift = new Shift(req.body);
    newShift.save(function(err) {
        res.redirect('/shifts/new')
        })
}