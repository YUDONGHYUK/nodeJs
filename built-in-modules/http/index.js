const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  // res.end(req.url);

  if (req.url === '/') {
    res.writeHead('200', { 'Content-Type': 'text/plain' });
    res.end('Home page');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About page');
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ firstName: 'Bruce', lastName: 'Wayne' }));
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }

  // const superHero = {
  //   firstName: 'Bruce',
  //   lastName: 'Wayne',
  // };

  /* HTTP template
  const name = 'Doyu';
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let html = fs.readFileSync(__dirname + '/index.html', 'utf-8');
  html = html.replace('{{name}}', name);
  res.end(html);
  */

  /* HTML response
  readFileSync는 파일의 전체 내용을 한 번에 읽기 때문에
  큰 HTML 파일이 있으면 모든 콘텐츠를 임시 Buffer에 저장하므로 불필요한 메모리 사용으로 이어질 수 있다.
  대신 stream을 사용할 수 있다.

  const html = fs.readFileSync('./index.html', 'utf-8');
  res.end(html);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(__dirname + '/index.html').pipe(res);
  */

  // res.writeHead(200, { 'Content-Type': 'application/json' });
  // res.end(JSON.stringify(superHero));

  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.end('Hello world!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
