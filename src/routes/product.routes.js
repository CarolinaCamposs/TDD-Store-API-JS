const express = require('express');
const { listProducts, createProduct } = require('../controllers/product.controller');

const router = express.Router();

router.post('/products', createProduct);
router.get('/products', listProducts);

module.exports = router;
