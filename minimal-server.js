const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('OK');
});

server.listen(5000, () => console.log('Minimal server on 5000'));
