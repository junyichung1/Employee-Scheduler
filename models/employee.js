var mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema ({
    name: {type: String},
    position: {type: String},
    wage: {type: Number},
    manager: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Employee', employeeSchema);