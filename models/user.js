var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var constants = require('../constants/config');
var passwordEncryptor = require('./plugins/passwordEncryptor.js')

var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });


userSchema.methods.comparePassword = function (candidatePassword) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) resolve(false);
        resolve(isMatch);
      });
    })
  
  };

// can add any instance method we like. We have added this method
// to save the token in the database and return it to server.js
userSchema.methods.generateAuthToken = function () {
    // this method run for a given user object.
    // that is, we run after the doc has been inserted into the db
    const user = this;
    const access = 'auth';
    const token = jwt.sign({ _id: user._id.toHexString(), access }, constants.JWT_SECRET).toString();

    return token;
};

userSchema.plugin(passwordEncryptor);

module.exports = mongoose.model('User', userSchema);