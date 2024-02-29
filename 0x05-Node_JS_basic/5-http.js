const http = require('http');
const countStudents = require('./2-read_file');


const port = 1254;
const host = '127.0.0.1';
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!')
    res.end('');
    
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
        const result = countStudents(process.argv[2]); // Assuming the CSV file path is passed as a command-line argument.
        res.write(result)
        // Note: countStudents currently logs directly to the console rather than returning data.
        // You might need to adjust countStudents to return data if you want to include it in the response.
      } catch (error) {
        res.write('Cannot load the database');
      }
  
      res.end();
    
  }
 
});

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);


});

module.exports = app;
