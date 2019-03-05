const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: { type: Object, required: true },
  tour: { type: Object, required: true },
  price: { type: Number, required: true },
  noAdult: { type: Number, required: true },
  noChildren: { type: Number, required: true },
  bookDate: { type: Date, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}, {
    versionKey: false
});

module.exports = mongoose.model('Booking', BookingSchema);
