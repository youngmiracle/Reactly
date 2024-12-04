const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const {check} = require('express-validator')
const router = express.Router();

router.post('/auth', userController.login);
router.post('/register', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10})
], userController.registration);
router.get('/check', authMiddleware, userController.check);

module.exports = router;