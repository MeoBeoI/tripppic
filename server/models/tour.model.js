const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
  title:      { type: String, required: true },
  phone:      { type: String, required: true },
  categories: [{ type: String, required: true }],
  description: { type: String, required: true },
  location:   { type: String, required: true },
  address: { type: String, required: true },
  expect: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  owner: { type: Object, required: true },
  cities: [{ type: String, required: true }],
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
}, {
    versionKey: false
});

module.exports = mongoose.model('Tour', TourSchema);
