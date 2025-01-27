const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // render : 템플릿 엔진을 사용할 때 사용, 등록된 view engine을 찾아 실행한다.
  res.render('admin/edit-product', {
    // views/admin/add-product
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;
  req.user
    .createProduct({
      title,
      price,
      imageUrl,
      description,
    })
    .then((result) => {
      console.log(`CREATED PRODUCT: ${result.id}`);
      res.redirect('/admin/products');
    })
    .catch(console.error);
  // Product.create({
  //   title,
  //   price,
  //   imageUrl,
  //   description,
  // })
  //   .then((result) => {
  //     console.log(`CREATED PRODUCT: ${result.id}`);
  //     res.redirect('/admin/products');
  //   })
  //   .catch(console.error);
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;

  if (!editMode) res.redirect('/');

  const prodId = req.params.productId;
  req.user.getProducts({ where: { id: prodId } }).then((products) => {
    const product = products[0];
    if (!product) return res.redirect('/');

    res.render('admin/edit-product', {
      product,
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
    });
  });
  // Product.findByPk(prodId)
  //   .then((product) => {
  //     if (!product) return res.redirect('/');
  //     res.render('admin/edit-product', {
  //       product,
  //       pageTitle: 'Edit Product',
  //       path: '/admin/edit-product',
  //       editing: editMode,
  //     });
  //   })
  //   .catch(console.error);
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId)
    .then((product) => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.imageUrl = updatedImageUrl;
      product.description = updatedDesc;
      return product.save();
    })
    .then((result) => {
      console.log(`UPDATED PRODUCT ID: ${prodId}`);
      res.redirect('/admin/products');
    })
    .catch(console.error);
};

exports.getProducts = (req, res, next) => {
  req.user.getProducts().then((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
  // Product.findAll().then((products) => {
  //   res.render('admin/products', {
  //     prods: products,
  //     pageTitle: 'Admin Prodcuts',
  //     path: '/admin/products',
  //   });
  // });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.destroy({ where: { id: prodId } })
    .then((result) => {
      console.log(`DELETED PRODUCT ID: ${prodId}`);
      res.redirect('/admin/products');
    })
    .catch(console.error);

  // Product.findByPk(prodId)
  //   .then((product) => {
  //     return product.destroy();
  //   })
  //   .then((result) => {
  //     console.log(`DELETED PRODCUT: ${prodId}`);
  //     res.redirect('/admin/products');
  //   })
  //   .catch(console.error);
};
