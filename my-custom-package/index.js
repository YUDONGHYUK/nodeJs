const upperCase = require('upper-case').upperCase;

function greet(name) {
  console.log(upperCase(`Hello ${name}, welcome to node.js`));
}

greet('doyu');

module.export = greet;
