const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  googleId: {
    type: String,
  },
  // Add any additional fields you want for Google authentication here
});

const User = mongoose.model('User', userSchema);

module.exports = User;
