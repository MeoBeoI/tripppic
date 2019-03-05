const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const bookingCtrl = require('../controllers/booking.controller');
const userCtrl = require('../controllers/user.controller');

const router = express.Router();
module.exports = router;

// TODO: Enable JWT
router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
  .post(asyncHandler(create))
  .get(asyncHandler(getAll))

router.route('/user/:userId')
  .get(asyncHandler(getBookingByUserId))

router.route('/vendor')
  .get(asyncHandler(getBookingByVendor));

router.route('/vendor/:vendorId')
  .get(asyncHandler(getBookingByVendorId));

router.route('/:id')
  .get(asyncHandler(findById));

router.route('/:id/accept')
  .post(asyncHandler(acceptBooking));

router.route('/:id/decline')
  .post(asyncHandler(declineBooking));

async function create(req, res) {
  req.body.tourParticipant = req.user || {} ;

  let booking = await bookingCtrl.insert(req.body);
  res.json(booking);
}

async function getAll(req, res) {
  let bookings = await bookingCtrl.getAll(req.body);
  res.json(bookings);
}

async function findById(req, res) {
  let booking = await bookingCtrl.findById(req.params.id);
  res.json(booking);
}

async function acceptBooking(req, res) {
  let booking = await bookingCtrl.acceptBooking(req.params.id);
  await userCtrl.acceptBooking(booking.user._id, booking._id);
  res.json(booking);
}

async function declineBooking(req, res) {
  let booking = await bookingCtrl.declineBooking(req.params.id);
  await userCtrl.declineBooking(booking.user._id, booking._id);
  res.json(booking);
}

async function getBookingByUserId(req, res) {
  let bookings = await bookingCtrl.getBookingByUserId(req.params.userId);
  res.json(bookings);
}

async function getBookingByVendorId(req, res) {
  let bookings = await bookingCtrl.getBookingByVendorId(req.params.vendorId);
  res.json(bookings);
}

async function getBookingByVendor(req, res) {
  let bookings = await bookingCtrl.getBookingByVendorId(req.user._id);
  res.json(bookings);
}
