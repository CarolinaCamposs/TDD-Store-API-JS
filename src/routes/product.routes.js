const express = require('express');
const { listProducts, createProduct 
    , updateProduct, deleteProduct
} = require('../controllers/product.controller');

const router = express.Router();

router.post('/products', createProduct);
router.get('/products', listProducts);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
