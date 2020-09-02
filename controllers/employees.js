const User = require('../models/user');
const Schedule = require('../models/schedule');
const Employee = require('../models/employee');


module.exports = {
new: newEmployee,
create,
edit,
update,
delete: deleteEmployee
}
function deleteEmployee(req, res) {
    Employee.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/employees/new')
    })
}

function update(req, res) {
    Employee.findByIdAndUpdate(req.params.id, req.body, function(err, employees) {
        if (err) {
            res.render('employees/edit', {title: 'Add Employees', employees})
        } else {
            res.redirect('/employees/new')
        }
    })
}
function edit(req, res) {
    Employee.findById(req.params.id, function(err, employees) {
        res.render('employees/edit', {employees})
    })
}
function create(req, res) {
    const addedEmployee = new Employee(req.body);
    addedEmployee.save(function(err, employee) {
        console.log(employee)
        res.redirect('/employees/new')
    })
}

function newEmployee(req, res) {
    Employee.find({}, function(err, employees){
        res.render('employees/new', {title: 'Add Employees', employees})
    })
}