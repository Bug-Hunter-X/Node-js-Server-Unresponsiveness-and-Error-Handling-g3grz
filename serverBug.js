const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a delay
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
  }, 5000); // Simulate a 5-second delay
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});