var mongoose = require('mongoose');


const scheduleSchema = new mongoose.Schema ({
    shifts: [], //array of object. need to be embedded?
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    week: {type: Date}
}, {
    timestamps: true
});

module.exports = mongoose.model('Schedule', scheduleSchema);