const path = require('path');
const express = require('express');

const productsController = require('../controllers/products')

const router = express.Router();



// Path: /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// Path: /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
