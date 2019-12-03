var mongoose = require('mongoose');
// var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var passwordEncryptor = require('./plugins/passwordEncryptor.js')

var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {timestamps : true});


userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

userSchema.plugin(passwordEncryptor);

module.exports = mongoose.model('User', userSchema);