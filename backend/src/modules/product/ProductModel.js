const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,      
    },
    price: {
      type: String,
      required: true,      
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'product',
  },
);

export default mongoose.model('Product', Schema);
