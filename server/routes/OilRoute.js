const express = require('express');
const oilController = require('../controllers/OilController')

const route = express.Router();

route.post('/motorOil', oilController.Motor);

module.exports = route;
