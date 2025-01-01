const path = require('path');
const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();

// Path: /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// Path: /admin/products => GET
router.get('/products', adminController.getProducts)

// Path: /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);


module.exports = router;
