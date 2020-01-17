var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
        email          : String,
        username       : String,
        name           : String,
        phoneNumber    : Number,
        country        : String,
        valid          : Boolean,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);