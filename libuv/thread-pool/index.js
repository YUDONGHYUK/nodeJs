const https = require('node:https');

const MAX_CALLS = 6;
const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request('https://www.google.com', (res) => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(`Request: ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}

//const crypto = require('node:crypto');

/* Beyond the number of CPU cores
process.env.UV_THREADPOOL_SIZE = 16;
const MAX_CALLS = 16;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}
*/

/* Increase Thread Pool size
process.env.UV_THREADPOOL_SIZE = 6;
const MAX_CALLS = 6;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}
*/

/* How many threads are there in total?
const MAX_CALLS = 5;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}
*/

/* Asynchronous Version
const MAX_CALLS = 2;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}
*/

/* Synchronous Version
const start = Date.now();
crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
console.log('Hash: ', Date.now() - start);
*/
