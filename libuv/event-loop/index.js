process.nextTick(() => console.log('this is process.nextTick 1'));
process.nextTick(() => {
  console.log('this is process.nextTick 2');
  process.nextTick(() =>
    console.log('this is the inner next tick inside next tick')
  );
});
process.nextTick(() => console.log('this is process.nextTick 3'));

Promise.resolve().then(() => console.log('this is Promise.resolve 1'));
Promise.resolve().then(() => {
  console.log('this is Promise.resolve 2');
  process.nextTick(() =>
    console.log('this is the inner next tick inside Promise then block')
  );
});
Promise.resolve().then(() => console.log('this is Promise.resolve 3'));

/* 출력 결과
this is process.nextTick 1
this is process.nextTick 2
this is process.nextTick 3
this is the inner next tick inside next tick
this is Promise.resolve 1
this is Promise.resolve 2
this is Promise.resolve 3
this is the inner next tick inside Promise then block
*/

/* Experiment 2.

Promise.resolve().then(() => console.log('this is Promise.resolve 1'));
process.nextTick(() => console.log('this is process.nextTick 1'));

출력 결과
this is process.nextTick 1
this is Promise.resolve 1

-> nextTick Queue의 모든 콜백은 promise Queue 콜백 이전에 실행된다.
*/

/* Experiment 1.

console.log('console.log 1');
process.nextTick(() => {
  console.log('this is process.nextTick 1');
});
console.log('console.log 2');

출력 결과
console.log 1
console.log 2
this is process.nextTick 1

-> 사용자가 작성한 모든 동기식 JavaScript 코드는 런타임이 실행하려는 비동기 코드보다 우선순위를 갖는다.
*/
