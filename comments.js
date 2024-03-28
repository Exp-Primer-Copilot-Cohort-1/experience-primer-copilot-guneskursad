const http = require('http');

// create web server using port 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
});

server.listen(80, 'localhost', () => {
    console.log('Server running at http://localhost:80/');
});