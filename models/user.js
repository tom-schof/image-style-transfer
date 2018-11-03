const bcrypt = require('bcryptjs');
// need mongoose to do mongoose things
const mongoose = require("mongoose");
// re-assign mongoose.Schema
const Schema = mongoose.Schema;

// create the user schema
const userSchema = new Schema({
    username: {
        type: String, 
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"], 
        // match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        index: true
    },
    password: {
        type: String
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"], 
        // match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true
    }
  
  
}, {timestamps: true});


userSchema.methods = {
    checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
    hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
    }
  }


  userSchema.pre('save', function (next) {
    if (!this.password) {
      console.log('models/user.js =======NO PASSWORD PROVIDED=======')
      next()
    } else {
      console.log('models/user.js hashPassword in pre save');
      this.password = this.hashPassword(this.password)
      next()
    }
  })

  // Create the User model using userSchema to export
const User = mongoose.model("User", userSchema);

// Export the User model for use
module.exports = User;