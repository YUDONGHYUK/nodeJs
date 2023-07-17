const path = require('node:path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// route: /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  // res.send(`<form action="/admin/product" method="POST">
  //   <input type="text" name="title" />
  //   <button type="submit">Add Product</button>
  // </form>`);
});

// route: /admin/product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
