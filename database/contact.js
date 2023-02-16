const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    nm: {
        type: String,
        required: true
       
    },
    email: {
        type: String,
        required: true
    },
    cemail: {
        type: String,
        required: true
       
    },
    mnumber: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
       
    },
    txtarea: {
        type: String,
        required: true
       
    }
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;