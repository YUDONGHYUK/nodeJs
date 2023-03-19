// microtask Queue + timer Queue + I/O Queue

const fs = require('node:fs');

fs.readFile(__filename, () => {
  console.log('this is readFile 1');
});

process.nextTick(() => console.log('this is process.nextTick 1'));
Promise.resolve().then(() => console.log('this is Promise.resolve 1'));
setTimeout(() => console.log('this is setTimeout 1'), 0);

for (let i = 0; i < 2000000000; i++) {}

/* timer Queue + I/O Queue

const fs = require('node:fs');

setTimeout(() => console.log('this is setTimeout 1'));

fs.readFile(__filename, () => {
  console.log('this is readFile 1');
});

// 실행 순서 보장 안됨...
*/

/* microtask Queue + I/O queue

const fs = require('node:fs');

fs.readFile(__filename, () => {
  console.log('this is readFile 1');
});

process.nextTick(() => console.log('this is process.nextTick 1'));
Promise.resolve().then(() => console.log('this is Promise.resolve 1'));

실행 순서
nextTick Queue -> promise Queue -> I/O Queue
*/
