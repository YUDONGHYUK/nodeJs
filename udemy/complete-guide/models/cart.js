const fs = require('fs');
const path = require('path');

const p = path.join(process.cwd(), 'data', 'cart.json');

module.exports = class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const existingProduct = cart.products.find((p) => p.id === id);

      if (existingProduct) {
        existingProduct.qty += 1;
      } else {
        cart.products.push({ id, qty: 1 });
      }
      cart.totalPrice += +productPrice;

      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.error(err);
      });
    });
  }
};
