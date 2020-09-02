const User = require('../models/user')
const Schedule = require('../models/schedule')
const Shift = require('../models/shift')

module.exports = {
    new: newTime,
    create,
    edit,
    update,
    delete: deleteShift
}
function deleteShift(req, res) {
    Shift.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/shifts/new')
    })
}
function update(req, res) {
    Shift.findByIdAndUpdate(req.params.id, req.body, function(err, shifts) {
        if (err) {
            res.render('shifts/edit', {shifts})
        } else {
            res.redirect('/shifts/new')
        }
    })
}
function edit(req, res) {
    Shift.findById(req.params.id, function(err, shifts) {
        res.render('shifts/edit', {shifts})
    })
}
function newTime(req, res) {
    Shift.find({}, function(err, shifts) {
        console.log(`hellooooooooo`,shifts)
        res.render('shifts/new', {title:'Add Shifts', shifts})
    });
}

function create(req, res) {
    const newShift = new Shift(req.body);
    newShift.save(function(err) {
        res.redirect('/shifts/new')
    });
}