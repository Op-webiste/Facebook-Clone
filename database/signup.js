const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
       
    },
    lname: {
        type: String,
        required: true
    },
    signupemail: {
        type: String,
        required: true,
        unique: true
       
    },
    signupcemail: {
        type: String,
        required: true,
        unique: true
    },
    signuppassword: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    radio: {
        type: String,
        required: true
    }
});

const SignUp = mongoose.model('SignUp', SignUpSchema);

module.exports = SignUp;