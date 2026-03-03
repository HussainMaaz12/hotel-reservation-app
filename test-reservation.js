const http = require('http');

const data = JSON.stringify({
  name: 'Jane Smith',
  email: 'jane@example.com',
  phone: '555-5678',
  date: '2026-03-20',
  time: '20:00',
  guests: 2,
  request: 'Quiet table'
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/reservations',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log(`BODY: ${body}`);
    process.exit(0);
  });
});

req.on('error', (e) => {
  console.error(`Error: ${e.message}`);
  process.exit(1);
});

req.write(data);
req.end();
