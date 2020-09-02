var mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema ({
    startTime: String,
    endTime: String,
})

module.exports = mongoose.model('Shift', shiftSchema);