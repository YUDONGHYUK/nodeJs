const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

/* use: Middleware를 실행시키기 위한 메서드
        모든 http 메서드(GET, POST 등...)에 반응

app.use((req, res, next) => {
  console.log('In the middleware');
  next(); // Allows the request to continue to the next middleware in line
});
*/

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).send(`<h1>Page not found</h1>`);
});

app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
