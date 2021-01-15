const mongoose = require('mongoose');

const { Schema } = mongoose;

const invoicesSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  invoiceDate: {
    type: Date,
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
  items: [
    {
      itemId: {
        type: Schema.Types.ObjectId,
        ref: 'Items',
        required: true
      },
      quantity: { type: Number, required: true }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoicesSchema);
