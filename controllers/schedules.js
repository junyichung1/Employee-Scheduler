const User = require('../models/user')
const Schedule = require('../models/schedule')

module.exports = {
    index,
    new: newSchedule
}

function newSchedule(req, res) {
    
}
function index(req, res) {
    Schedule.find({}, function(err) {
    res.render("schedules/index", { title: "Schedule" });
})
}