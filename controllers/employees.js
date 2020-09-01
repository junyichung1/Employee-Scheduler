const User = require('../models/user');
const Schedule = require('../models/schedule');
const Employee = require('../models/employee');

module.exports = {
new: newEmployee,
create
}
function create(req, res) {
    
    const addedEmployee = new Employee(req.body);
    addedEmployee.save(function(err, employee) {
        console.log(employee)
        res.render('employees/new', {title: 'Add Employees', addedEmployee})
    })
}

function newEmployee(req, res) {
    let addedEmployee = new Employee(req.body)
    res.render('employees/new', {title: 'Add Employees', addedEmployee})
}