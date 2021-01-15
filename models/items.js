const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Items', itemsSchema);
