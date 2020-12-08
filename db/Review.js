/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  rating: { type: Number, required: true },
  recommend: { type: Boolean, required: true },
  response: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, required: true },
  reviewer_name: { type: String, required: true },
  helpfulness: { type: Number, required: true },
  reported: { type: Boolean, required: true },
  product_id: { type: Number, required: true }
});

module.exports = mongoose.model('Review', reviewSchema);