// Init the server with the following routes:
// /: returns Hello Holberton School!
// /students: returns This is the list of our students
// with the number of students in 'fields': <number of students>
const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const db = process.argv[2];
    fs.readFile(db, 'utf8', (err, data) => {
      if (err) {
        res.end(err.message);
      } else {
        const lines = data.split('\n').filter((line) => line !== '');
        const students = lines.map((line) => line.split(','));
        const csStudents = students.filter((student) => student[3] === 'CS').map((student) => student[0]);
        const sweStudents = students.filter((student) => student[3] === 'SWE').map((student) => student[0]);
        res.end(`This is the list of our students\nNumber of students: ${students.length}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
      }
    });
  } else {
    res.end('Not found');
  }
});

app.listen(1245);
