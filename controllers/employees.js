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
        res.redirect('/employees/new')
    })
}

function newEmployee(req, res) {
    Employee.find({}, function(err, employees){
        res.render('employees/new', {title: 'Add Employees', employees})
    })
}