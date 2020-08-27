var mongoose = require('mongoose');

const playerSchema = new Schema ({
    position: String,
    stats: Object
})

const teamSchema = new Schema ({
    teamName: String,
    players: [playerSchema],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', studentSchema);