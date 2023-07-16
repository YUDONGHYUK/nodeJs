const express = require('express');

const app = express();

/* use: Middleware를 실행시키기 위한 메서드

app.use((req, res, next) => {
  console.log('In the middleware');
  next(); // Allows the request to continue to the next middleware in line
});
*/

app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('In the another middleware');
  res.send('<h1>The "Add Product" Page</h1>');
  // next()를 호출하지 않았기 때문에 /add-product 경로로 들어오면
  // '/' 경로에 설정한 미들웨어가 실행되지 않는다.
});

app.use('/', (req, res, next) => {
  console.log('In the another middleware');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
