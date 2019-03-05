const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const tourCtrl = require('../controllers/tour.controller');
const userCtrl = require('../controllers/user.controller');
const bookingCtrl = require('../controllers/booking.controller');

const router = express.Router();
module.exports = router;

// TODO: Enable JWT
router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
  .post(asyncHandler(create))
  .get(asyncHandler(getAll))

router.route('/:id')
  .get(asyncHandler(findById));

router.route('/:id/book')
  .post(asyncHandler(bookTour));

async function create(req, res) {

  req.body.owner = req.user;
  delete req.body.owner.booking;

  let tour = await tourCtrl.create(req.body);
  res.json(tour);
}

async function getAll(req, res) {
  let tours = await tourCtrl.getAll(req.query);
  res.json(tours);
}

async function findById(req, res) {
  let tour = await tourCtrl.findById(req.params.id);
  res.json(tour);
}

async function bookTour(req, res) {

  let tour = await tourCtrl.findById(req.params.id);
  // TODO: database object
  req.body.tour = tour;
  req.body.user = req.user ;
  req.body.status = 'inquery';
  req.body.price = req.body.noAdult * tour.price + req.body.noChildren * tour.price;

  let booking = await bookingCtrl.insert(req.body);

  let user = await userCtrl.bookTour(booking);

  // TODO: change response
  res.json({ status: 200 });
}