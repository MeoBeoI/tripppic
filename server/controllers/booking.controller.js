const Joi = require('joi');
const mongoose = require('mongoose');
const Booking = require('../models/booking.model');

const bookingSchema = Joi.object({
  title: Joi.string().required(),
  email: Joi.string().email(),
})

module.exports = {
  insert,
  getAll,
  findById,
  acceptBooking,
  declineBooking,
  getBookingByUserId,
  getBookingByVendorId,
}

async function insert(booking) {
  // TODO: validate booking
  // tour = await Joi.validate(tour, bookingSchema, { abortEarly: false });
  return await new Booking(booking).save();
}


async function getAll() {
  return await Booking.find()
}

async function findById(id) {
  return await Booking.findById(id);
}

async function getBookingByUserId(userId) {
  return await Booking.find({ 'user._id': mongoose.Types.ObjectId(userId) });
}

async function getBookingByVendorId(vendorId) {
  return await Booking.find({ 'tour.owner._id': mongoose.Types.ObjectId(vendorId) });
}

async function acceptBooking(id) {
  return await Booking.findByIdAndUpdate(id, {
    status: 'accepted'
  });
}
async function declineBooking(id) {
  return await Booking.findByIdAndUpdate(id, {
    status: 'rejected'
  });
}