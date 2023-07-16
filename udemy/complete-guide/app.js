const http = require('http');

const express = require('express');

const app = express();

// use: Middleware를 실행시키기 위한 메서드
app.use((req, res, next) => {
  console.log('In the middleware');
  next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log('In the another middleware');
  res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);
