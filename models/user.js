var mongoose = require('mongoose');

const playerSchema = new mongoose.Schema ({
    position: String
})

const userSchema = new mongoose.Schema ({
    teamName: String,
    players: [playerSchema],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);