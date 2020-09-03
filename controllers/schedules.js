const User = require('../models/user');
const Schedule = require('../models/schedule');
const Shift = require('../models/shift');
const Employee = require('../models/employee');
const moment = require('moment');
const PDF = require('pdfkit');
const employee = require('../models/employee');

module.exports = {
    index,
    create,
    show,
    update,
    deleteSchedule,
    deleteShift
    
}

function deleteSchedule(req, res) {
    Schedule.findByIdAndDelete(req.params.id, function(err, schedule) {
        res.redirect(`/schedules`)
    })
}
function deleteShift(req, res) {
    Schedule.findById(req.params.id, function(err, schedule) {
        schedule.shifts.splice(req.params.emp, 1);
        schedule.save(function(err) {
            res.redirect(`/schedulize/${req.params.id}`);
        });
    })
}       
    
    // Schedule.findById(req.params.id, function(err, schedule) {
    //         schedule.shifts.forEach((person, idx) => {
    //             console.log(`testingggg`, person)
    //             let hasId = person.some(sched => sched.employeeId == req.params.emp);    
    //             if (hasId) {
    //                 console.log(`hello0o0o`)
    //                 schedule.shifts.splice(idx,1)
    //             }
    //         })
    //         schedule.save(function(err) {
    //     })
    // })
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
            console.log(schedule.shifts)
            schedule.save(function(err) {
                res.redirect(`/schedulize/${schedule._id}`)
            })
        })
    })
};

function show(req, res) {
    Schedule.findById(req.params.id, function(err, schedule) {
        Shift.find({}, function(err, shifts) {
            Employee.find({}, function(err, employees) {
                let includedEmployees = schedule.shifts.map( s => s[0].employeeName);
                employees = employees.filter(e => !includedEmployees.includes(e.name));
                
                res.render('schedules/show', {title: 'Schedulizer', schedule, employees, shifts}); 
            })
        })    
    })
}
    // 

function create(req, res) { 
        // const newSchedule = new Schedule(req.body);
        const w = req.body.week;
        req.body.week = `${w.substr(5, 2)}-${w.substr(8,2)}-${w.substr(0,4)}`
        req.body.user = req.user._id;
        Schedule.create(req.body, function(err, schedule) {
            res.redirect('/schedules')

        })
        // newSchedule.user = req.user._id;
        // newSchedule.week = req.body.week
        // newSchedule.save(function (err) {
        // })
    // })
}


function index(req, res) {
    
    Employee.find({}, function(err, employees) {
        Shift.find({}, function(err, shifts) {
            Schedule.find({}, function(err, schedules) {
                console.log(`111111111`, schedules)
                res.render('schedules/index', {title: 'Schedules', employees, shifts, schedules})
            })
        })
    })
}