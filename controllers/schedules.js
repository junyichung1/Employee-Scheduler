const User = require('../models/user')
const Schedule = require('../models/schedule')

module.exports = {
    index,
    
}



function index(req, res) {
    Schedule.find({user: req.params._id}, function(err, schedule) {
        console.log(schedule);
    res.render("schedules/index", { title: "Schedule", schedule, user: req.user});
})
}