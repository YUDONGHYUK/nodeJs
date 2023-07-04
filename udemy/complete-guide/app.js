const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  // 대게 서버를 중지할 일이 없기 때문에 사용하지 X, 하지만 서버를 종료해야 한다면 process.exit() 사용!
  // process.exit();

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
  // 응답을 끝낸 뒤(end)에는 더 이상 입력해서는 안된다.
  // write를 계속 호출할 수 있지만 오류가 발생!
});

server.listen(3000);
