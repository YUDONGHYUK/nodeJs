const path = require('path');
const express = require('express');
const { rootDir } = require('../utils/path');

const router = express.Router();

const products = [];

// Path: /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // render : 템플릿 엔진을 사용할 때 사용, 등록된 view engine을 찾아 실행한다.
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// Path: /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
