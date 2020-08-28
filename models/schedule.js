var mongoose = require('mongoose');



const scheduleSchema = new mongoose.Schema ({
    teamName: String,
    players: [playerSchema],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Schedule', scheduleSchema);