// delay가 0ms인 setTimeout과 setImmediate 메소드를 실행할 때는 실행 순서가 보장되지 않는다.!

setTimeout(() => console.log('this is setTimeout 1'), 0);
setImmediate(() => console.log('this is setImmediate 1'));

/* microtask Queue 콜백은 check Queue 콜백 사이에 실행된다.

setImmediate(() => console.log('this is setImmediate 1'));
setImmediate(() => {
  console.log('this is setImmediate 2');
  process.nextTick(() => console.log('this is process.nextTick 1'));
  Promise.resolve().then(() => console.log('this is Promise.resolve 1'));
});
setImmediate(() => console.log('this is setImmediate 3'));

*/

/* microtask Queue의 콜백은 I/O 콜백 후와 check Queue 콜백 전에 실행된다.

const fs = require('node:fs');

fs.readFile(__filename, () => {
  console.log('this is readFile 1');
  setImmediate(() => console.log('this is inner setImmediate inside readFile'));
  process.nextTick(() => {
    console.log('this is inner process.nextTick inside readFile');
  });
  Promise.resolve().then(() => {
    console.log('this is inner Promise.resolve inside readFile');
  });
});

process.nextTick(() => console.log('this is process.nextTick 1'));
Promise.resolve().then(() => console.log('this is Promise.resolve 1'));
setTimeout(() => console.log('this is setTimeout 1'), 0);

for (let i = 0; i < 2000000000; i++) {}
*/
