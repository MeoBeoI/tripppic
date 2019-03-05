const express = require('express');
const uiTourRoutes = require('./tour.ui.route');

const router = express.Router(); // eslint-disable-line new-cap

router.use('/tours', uiTourRoutes);

module.exports = router;
