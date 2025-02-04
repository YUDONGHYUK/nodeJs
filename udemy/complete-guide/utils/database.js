require('dotenv').config();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(
    `mongodb+srv://doyu:${process.env.DB_PASSWORD}@cluster0.sq5zh.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0`
  )
    .then((client) => {
      console.log('Connected!!');
      _db = client.db();
      cb();
    })
    .catch(console.error);
};

const getDb = () => {
  if (!_db) throw Error('No database found!');
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
