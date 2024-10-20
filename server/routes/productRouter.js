const express = require('express');
const productRouter = require('../controllers/productController');

const router = express.Router();

router.post('/', productRouter.create);
router.get('/', productRouter.getAll);
router.get('/:id', productRouter.getOne);

module.exports = router;