var mongoose = require('mongoose');


const userSchema = new mongoose.Schema ({
    name: {type: String},
    department: {type: String},
    email: {type: String},
    googleId: {type: String},
    avatar: {type: String},
    times: []
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);