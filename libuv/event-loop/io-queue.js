// microtask Queue + timer Queue + I/O Queue + check Queue

const fs = require('node:fs');

fs.readFile(__filename, () => {
  console.log('this is readFile 1');
});

process.nextTick(() => console.log('this is process.nextTick 1'));
Promise.resolve().then(() => console.log('this is Promise.resolve 1'));
setTimeout(() => console.log('this is setTimeout 1'), 0);
setImmediate(() => console.log('this is setImmediate 1'));

for (let i = 0; i < 2000000000; i++) {}

// 실행 순서
// nextTick Queue -> promise Queue -> timer Queue -> check Queue -> I/O Queue
// I/O Queue는 컨트롤이 처음에 진입하면 비어져 있고 polling 부분에서 완료 부에 따라 I/O Queue에 넣는다.

/* microtask Queue + timer Queue + I/O Queue

const fs = require('node:fs');

fs.readFile(__filename, () => {
  console.log('this is readFile 1');
});

process.nextTick(() => console.log('this is process.nextTick 1'));
Promise.resolve().then(() => console.log('this is Promise.resolve 1'));
setTimeout(() => console.log('this is setTimeout 1'), 0);
setImmediate(() => console.log('this is setImmediate 1'));

for (let i = 0; i < 2000000000; i++) {}

nextTick Queue -> promise Queue -> timer Queue -> I/O Queue
/*

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
