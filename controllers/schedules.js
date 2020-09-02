const User = require('../models/user')
const Schedule = require('../models/schedule')
const Shift = require('../models/shift')
const Employee = require('../models/employee')

module.exports = {
    index,
    new: newSchedule,
    create
    
}

function create(req, res) { 
    const newSchedule = new Schedule(req.body);
    newSchedule.save(function(err) {
        console.log(newSchedule.shift)
        res.redirect('/schedules/new')
    })
}

function newSchedule(req, res) {
    Employee.find({}, function(err, employees) {
            Shift.find({}, function(err, shifts) {
            res.render('schedules/new', {title: 'Schedulizer', employees, shifts})
            })
        })
    }



function index(req, res) {
    Shift.find({}, function(err, shifts) {
        Schedule.find({user: req.params._id}, function(err, schedule) {
            console.log(schedule);
        res.render("schedules/index", { title: "Schedule", schedule, user: req.user, shifts});
        })
    })
}