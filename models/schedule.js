var mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema ({
    times: String,
    hours: Number
})
const scheduleSchema = new mongoose.Schema ({
    shifts: [shiftSchema], //array of object. need to be embedded?
    employee: [{type: mongoose.Schema.Types.ObjectId, ref: 'Employee'}],
    users: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Schedule', scheduleSchema);