var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var customerSchema = new Schema({
    username: {
        type: String,
        required: false
    },
    otp: {
        type: Integer
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    device: {
        type: String,
        default: "android"
    },
    _id: {
        type: String
    },
}, {timestamps : true});



module.exports = mongoose.model('Customer', customerSchema);