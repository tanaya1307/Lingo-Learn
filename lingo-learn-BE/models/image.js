const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: true,
    unique: true,
  },
});

const Image = mongoose.model('Image', imageSchema,'Image desc');

module.exports = Image;
