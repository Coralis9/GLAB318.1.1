const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Routing logic
  if (req.url === '/') {
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
  } else if (req.url === '/about') {
    res.write('<h1>About Page</h1>');
    res.write('<p>This is a simple Node server.</p>');
  } else if (req.url === '/contact') {
    res.write('<h1>Contact Page</h1>');
    res.write('<p>Email us at contact@example.com.</p>');
  } else {
    res.statusCode = 404;
    res.write('<h1>404 - Page Not Found</h1>');
  }

  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});