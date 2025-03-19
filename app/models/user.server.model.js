

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true  // ✅ Using Schema Modifier (trim)
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,  // ✅ Using Schema Modifier (lowercase)
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6  // ✅ Using Schema Modifier (minlength)
    },
    created: {
        type: Date,
        default: Date.now  // ✅ Defining Default Value
    }
});

// Compile model
const User = mongoose.model('User', UserSchema);
module.exports = User;
