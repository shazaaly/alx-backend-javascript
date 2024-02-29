const http = require('http');

const port = 1254;
const host = -'127.0.0.1';
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {

});

module.exports = app;
