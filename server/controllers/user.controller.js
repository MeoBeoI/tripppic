const bcrypt = require('bcrypt');
const Joi = require('joi');
const User = require('../models/user.model');

const userSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email(),
  mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/),
  password: Joi.string().required(),
  repeatPassword: Joi.string().required().valid(Joi.ref('password'))
})


module.exports = {
  insert,
  bookTour,
  acceptBooking,
  declineBooking,
}

async function insert(user) {
  user = await Joi.validate(user, userSchema, { abortEarly: false });
  user.hashedPassword = bcrypt.hashSync(user.password, 10);
  delete user.password;
  return await new User(user).save();
}

async function bookTour(booking) {
  return await User.findByIdAndUpdate(booking.user._id, {
    $push: { booking: booking }
  })
}

async function acceptBooking(userId, bookingId) {
  return await User.updateOne({
    'booking._id': bookingId,
  }, {
    $set: { 'booking.$.statuis': 'accepted' }
  })
}

async function declineBooking(userId, bookingId) {
  return await User.updateOne({
    'booking._id': bookingId,
  }, {
      $set: { 'booking.$.statuis': 'rejected' }
  })
}