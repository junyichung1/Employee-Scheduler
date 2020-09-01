var mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema ({
    startTime: Date,
    endTime: Date,
    hours: {type: Number}
    
})
const scheduleSchema = new mongoose.Schema ({
    shift: [shiftSchema], //array of object. need to be embedded?
    employee: [{type: mongoose.Schema.Types.ObjectId, ref: 'Employee'}],
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Schedule', scheduleSchema);