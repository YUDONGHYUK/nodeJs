const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // render : 템플릿 엔진을 사용할 때 사용, 등록된 view engine을 찾아 실행한다.
  res.render('admin/add-product', {
    // views/admin/add-product
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;
  const product = new Product(title, price, description, imageUrl);
  product
    .save()
    .then((result) => {
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(console.error);
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;

  if (!editMode) res.redirect('/');

  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      if (!product) return res.redirect('/');

      res.render('admin/edit-product', {
        product,
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
      });
    })
    .catch(console.error);
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  const product = new Product(
    updatedTitle,
    updatedPrice,
    updatedDesc,
    updatedImageUrl,
    prodId
  );

  product
    .save()
    .then(() => {
      console.log(`UPDATED PRODUCT ID: ${prodId}`);
      res.redirect('/admin/products');
    })
    .catch(console.error);
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products',
      });
    })
    .catch(console.error);
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId)
    .then(() => {
      res.redirect('/admin/products');
    })
    .catch(console.error);
};
