const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '@15y59d68h', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
