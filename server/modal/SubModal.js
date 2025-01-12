const mongoose = require('mongoose');

// Define the schema for a user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true // Removes any leading/trailing spaces
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensures that email is unique
        lowercase: true,  // Converts email to lowercase before saving
        match: [/.+\@.+\..+/, 'Please fill a valid email address'] // Email validation regex
    },
    role:{
        type:String,
        default:'user'
    },
    password:{
        type:String,
        default:'defaultPassword123',
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
