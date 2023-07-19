const path = require('node:path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// route: /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCss: true,
    productCss: true,
    activeAddProduct: true,
  });
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  // res.send(`<form action="/admin/product" method="POST">
  //   <input type="text" name="title" />
  //   <button type="submit">Add Product</button>
  // </form>`);
});

// route: /admin/product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
