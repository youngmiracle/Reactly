const express = require('express');
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const typeRouter = require ('./typeRouter');
const router = express.Router();

router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/type', typeRouter);

module.exports = router;