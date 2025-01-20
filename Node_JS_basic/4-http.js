// Create a simple HTTP server using Node's http module.
const http = require('http');

const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
        res.end('Hello Holberton School!');
    res.statusCode = 404;
        res.end('Not found');
});

app.listen(1245, () => {
    console.log('Server is running on localhost:1245');
});

module.exports = app;
