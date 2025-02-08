const http = require('http');

const server = http.createServer((req, res) => {
  // Use try...catch to handle potential errors
  try {
    // Simulate a long-running operation with potential for error
    setTimeout(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello, world!');
    }, 5000); 
  } catch (err) {
    console.error('Error processing request:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

// Graceful shutdown
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed gracefully.');
    process.exit(0);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});