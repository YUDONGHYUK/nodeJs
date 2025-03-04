const mongodb = require('mongodb');
const getDb = require('../utils/database').getDb;

class User {
  constructor(username, email, cart, _id) {
    this.username = username;
    this.email = email;
    this.cart = cart;
    this._id = _id;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  addToCart(product) {
    const cartProductIndex = this.cart.items.findIndex((p) => {
      console.log(
        'id          ',
        p.productId.toString(),
        product._id.toString()
      );
      return p.productId.toString() === product._id.toString();
    });

    const updatedCartItems = [...this.cart.items];
    let quantity = 1;

    if (cartProductIndex >= 0) {
      quantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = quantity;
    } else {
      updatedCartItems.push({
        productId: new mongodb.ObjectId(product._id),
        quantity,
      });
    }

    const updatedCart = { items: updatedCartItems };

    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        { _id: new mongodb.ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  getCart() {
    const db = getDb();
    const productIds = this.cart.items.map((i) => i.productId);

    return db
      .collection('products')
      .find({ _id: { $in: productIds } })
      .toArray()
      .then((products) => {
        return products.map((p) => ({
          ...p,
          quantity: this.cart.items.find(
            (i) => i.productId.toString() === p._id.toString()
          ).quantity,
        }));
      });
  }

  deleteItemFromCart(productId) {
    const updatedCartItems = this.cart.items.filter(
      (i) => i.productId.toString() !== productId.toString()
    );
    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        { _id: new mongodb.ObjectId(this._id) },
        { $set: { cart: { items: updatedCartItems } } }
      );
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new mongodb.ObjectId(userId) })
      .then((user) => {
        return user;
      })
      .catch(console.error);
  }
}

module.exports = User;
