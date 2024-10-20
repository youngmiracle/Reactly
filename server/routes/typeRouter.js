const express = require('express');
const typeController = require('../controllers/typeController')

const router = express.Router();

router.post('/', typeController.create);
router.get('/', typeController.getAll);

module.exports = router;