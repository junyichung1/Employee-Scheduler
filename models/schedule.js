var mongoose = require('mongoose');


const scheduleSchema = new mongoose.Schema ({
    shift: [{type: mongoose.Schema.Types.ObjectId, ref: 'Shift'}], //array of object. need to be embedded?
    employee: [{type: mongoose.Schema.Types.ObjectId, ref: 'Employee'}],
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Schedule', scheduleSchema);