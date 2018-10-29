const mongoose = require('mongoose');

// Native ES6 Promises instead of mongoose Promises
mongoose.Promise = global.Promise;

// Client Schema
const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    bags: {
        type: Number,
        trim: true,
        required: true
    },
    contactInfo: {
        email: {
            type: String,
            trim: true,
            default: ''
        }
    }
})

// Export Client Schema
module.exports = mongoose.model('Client', clientSchema);