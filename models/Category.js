'use strict'

const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);