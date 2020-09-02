const User = require('../models/user');
const Schedule = require('../models/schedule');
const Shift = require('../models/shift');
const Employee = require('../models/employee');
const moment = require('moment');

module.exports = {
    index,
    new: newSchedule,
    create
    
}
function addEmployee() {
    
    const times = []
    req.body.shifts.forEach(shift => {
        let obj = {};
        obj.employeeId = employee._id;
        obj.employeeName = employee.name;
        obj.wage = employee.wage;
        if (shift === " - ") {
            obj.startTime = null;
            obj.endTime = null;
            obj.hours = 0;
        } else {
            obj.startTime = shift.substring(0, 6);
            obj.endTime = shift.substring(8, 13);
            const start = moment(obj.startTime, 'HH:mm');
            const end = moment(obj.endTime, 'HH:mm');
            let hours = moment.duration(end.diff(start)).asHours();
            if (hours < 0) hours = 24 + hours;
            
            obj.hours = hours
            }
        times.push(obj)
        })
        console.log(times)
}

function create(req, res) { 
    Employee.findById(req.body.employee, addEmployee(err, employee) {
        const newSchedule = new Schedule();
        newSchedule.shifts.push(times);
        newSchedule.user = req.user._id;
        newSchedule.save(function (err) {
        //     console.log(newSchedule);
            res.redirect('/schedules')
        })
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
        res.render("schedules/index", { title: "Schedule", schedule, user: req.user, shifts});
        })
    })
}