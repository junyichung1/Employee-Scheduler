var mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema ({
    startTime: String,
    endTime: String,
    hours: {type: Number},
    
})

module.exports = mongoose.model('Shift', shiftSchema);