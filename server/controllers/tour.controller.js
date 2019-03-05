const Joi = require('joi');
const Tour = require('../models/tour.model');

const tourSchema = Joi.object({
  title: Joi.string().required(),
  email: Joi.string().email(),
  phone: Joi.string().regex(/^[1-9][0-9]{9}$/),
  description: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  location: Joi.string().required(),
  cities: Joi.array().required(),
  expect: Joi.string().required(),
  startTime: Joi.date().required(),
  endTime: Joi.date().required(),
  image: Joi.string().required(),
  price: Joi.number().required(),
})


module.exports = {
  create,
  getAll,
  findById,
}

async function create(tour) {
  // tour = await Joi.validate(tour, tourSchema, { abortEarly: false });
  return await new Tour(tour).save();
}

async function getAll(query) {

  let condition = { };
  if (query.cities) { condition.cities = query.cities }
  if (query.categories) { condition.categories = query.categorines }
  if (query.price_min || query.price_max) { condition.price = {} }
  if (query.price_min) { condition.price.$gte = query.price_min }
  if (query.price_max) { condition.price.$lte = query.price_max }

  return await Tour.find(condition)
}

async function findById(id) {
  return await Tour.findById(id);
}
