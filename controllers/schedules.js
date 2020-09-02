const User = require('../models/user');
const Schedule = require('../models/schedule');
const Shift = require('../models/shift');
const Employee = require('../models/employee');
const moment = require('moment');

module.exports = {
    index,
    // new: newSchedule,
    create,
    show,
    update
    
}
function update(req, res) {
    Schedule.findById(req.params.id, function(err, schedule) {
        Employee.findById(req.body.employee, function(err, employee) {
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
            schedule.shifts.push(times)
            schedule.save(function(err) {
                res.redirect(`/schedules/${schedule._id}`)
            })
        })
    })
};

function show(req, res) {
    console.log(`TITs`)
    Schedule.findById(req.params.id, function(err, schedule) {
        Shift.find({}, function(err, shifts) {
            Employee.find({}, function(err, employees) {
                res.render('schedules/show', {title: 'Schedulizer', schedule, employees, shifts}) //shifts: req.body.shifts})
        })

        })
    })
}
    // 

function create(req, res) { 
    // console.log(req.body)
    // Employee.findById(req.body.employee, function(err, employee) {
    //     const times = []
    // req.body.shifts.forEach(shift => {
    //     let obj = {};
    //     obj.employeeId = employee._id;
    //     obj.employeeName = employee.name;
    //     obj.wage = employee.wage;
    //     if (shift === " - ") {
    //         obj.startTime = null;
    //         obj.endTime = null;
    //         obj.hours = 0;
    //     } else {
    //         obj.startTime = shift.substring(0, 6);
    //         obj.endTime = shift.substring(8, 13);
    //         const start = moment(obj.startTime, 'HH:mm');
    //         const end = moment(obj.endTime, 'HH:mm');
    //         let hours = moment.duration(end.diff(start)).asHours();
    //         if (hours < 0) hours = 24 + hours;
            
    //         obj.hours = hours
    //         }
    //     times.push(obj)
    //     })
    //     console.log(times)
    
        const newSchedule = new Schedule(req.body);
        // newSchedule.shifts.push(times);
        // newSchedule.user = req.user._id;
        // newSchedule.week = req.body.week
        newSchedule.save(function (err) {
        //     console.log(newSchedule);
            res.redirect('/schedules')
        })
    // })
}

// function newSchedule(req, res) {
//     Employee.find({}, function(err, employees) {
//             Shift.find({}, function(err, shifts) {
//                 Schedule.find({}, function(err, schedules) {
//                     console.log(`testingo0o0o0`, schedules)
//                     res.render('schedules/new', {title: 'Schedulizer', employees, shifts, schedules})
//                 })
//             })
//         })
//     }



function index(req, res) {
    Employee.find({}, function(err, employees) {
        Shift.find({}, function(err, shifts) {
            Schedule.find({}, function(err, schedules) {
                console.log(`testingo0o0o0`, schedules)
                res.render('schedules', {title: 'Schedules', employees, shifts, schedules})
            })
        })
    })
}