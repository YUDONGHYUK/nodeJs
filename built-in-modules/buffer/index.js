// const buffer = new Buffer.from('Doyu', 'utf-8');
const buffer = new Buffer.from('Doyu');

// buffer.write('Doyu');

console.log(buffer.toJSON()); // { type: 'Buffer', data: [ 72, 101, 108, 108 ] }
console.log(buffer); // <Buffer 48 65 6c 6c>
console.log(buffer.toString()); // Hell
