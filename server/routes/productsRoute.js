const express = require('express');
const productController = require('../controllers/productController')

const route = express.Router();

route.post('/motorOil', productController.MotorOil);
route.post('/gearOil', productController.GearOil);
route.post('/antiFreeze', productController.AntiFreeze);

module.exports = route;
