const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const tourCtrl = require('../controllers/tour.controller');

const router = express.Router();
module.exports = router;

router.route('/')
  .get(asyncHandler(getAll))


async function getAll(req, res) {
  let tours = await tourCtrl.find();


  res.json(tour);
}