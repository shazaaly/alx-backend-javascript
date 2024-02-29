const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim());
      lines.shift(); // Remove header

      const students = {};
      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      });

      let output = ''

      let total = `Number of students: ${lines.length}\n`; // Log total number of students

      Object.keys(students).forEach((field) => {
        output += total + `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`;
      });
      resolve(output);
    });
  });
}

module.exports = countStudents;
