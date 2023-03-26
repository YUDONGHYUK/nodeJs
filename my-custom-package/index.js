const upperCase = require('upper-case').upperCase;

function greet(name) {
  // console.log(upperCase(`Hello ${name}, welcome to node.js`));
  console.log(upperCase(`Hello ${name}, welcome to Global Packages.`));
}

greet('doyu');

module.export = greet;
