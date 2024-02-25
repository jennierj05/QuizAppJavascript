const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;