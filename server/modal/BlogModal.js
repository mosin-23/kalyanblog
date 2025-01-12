const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  bid: {
    type: String,
    required: true,
    unique: true, // Ensures the bid is unique
  },
  title: {
    type: String,
    required: true,
    trim: true, // Removes leading/trailing whitespaces
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of image URLs or paths
    validate: [arrayLimit, "You can add up to 10 images only."], // Custom validator
  },
  links: {
    type: [String], // Array of image URLs or paths
    validate: [arrayLimit, "You can add up to 10 images only."], // Custom validator
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically adds the creation timestamp
  },
});

// Validator to limit the number of images in the array
function arrayLimit(val) {
  return val.length <= 10;
}

// Validator to check if a string is a valid URL
function isValidURL(url) {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return !url || urlRegex.test(url); // Allow empty (optional) or valid URLs
}

module.exports = mongoose.model("Blog", BlogSchema);
