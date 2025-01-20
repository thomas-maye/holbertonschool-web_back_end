// A function that reads a database and returns a
// promise that resolves with the data in the database.
import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const students = {};
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    lines.shift();

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (field) {
        if (!students[field]) students[field] = [];
        students[field].push(firstname);
      }
    });

    resolve(students);
  });
});

export default readDatabase;
