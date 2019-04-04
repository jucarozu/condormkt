'use strict'

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  photo: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);