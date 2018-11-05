// User Image Upload model

// need mongoose to do mongoose things
const mongoose = require("mongoose");
// re-assign mongoose.Schema
const Schema = mongoose.Schema;

// create the upload img schema
const uploadSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  style: {
    type: String
  },
  user: {
    type: String
  },
  likes: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Create the Upload model using uploadSchema to export
const Upload = mongoose.model("Upload", uploadSchema);

// Export the Upload model for use
module.exports = Upload;
