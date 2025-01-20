/*eslint-disable*/
// Create a function named countStudents that reads a CSV file and prints the number of students per field.
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.length > 0);
      console.log(`Number of students: ${lines.length - 1}`);
      const fields = {};
      for (let i = 1; i < lines.length; i++) {
        const student = lines[i].split(',');
        if (fields[student[3]]) {
          fields[student[3]].push(student[0]);
        } else {
          fields[student[3]] = [student[0]];
        }
      }
      for (const field in fields) {
        if (field) {
          const list = fields[field];
          console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;
