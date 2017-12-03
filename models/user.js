var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id:         Number,
    userName:   String,
    password:   String,
    firstName:  String,
    lastName:   String,
    rol:        String,
});

module.exports = mongoose.model('User', UserSchema);