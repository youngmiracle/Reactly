const express = require('express');
const authController = require('../controllers/authController')

const route = express.Router();

route.get('/auth', authController.Login);

module.exports = route;
