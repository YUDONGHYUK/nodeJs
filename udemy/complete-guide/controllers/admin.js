const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  // render : 템플릿 엔진을 사용할 때 사용, 등록된 view engine을 찾아 실행한다.
  res.render('admin/add-product', { // views/admin/add-product
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  })
};

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', { // views/admin/prodcuts
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    })
  })
}