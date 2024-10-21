const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/auth', userController.login);
router.post('/register', userController.registration);
router.get('/check', authMiddleware, userController.check);

module.exports = router;