var mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema ({
    name: {type: String},
    position: {type: String},
    wage: {type: Number}
})

module.exports = mongoose.model('Employee', employeeSchema);