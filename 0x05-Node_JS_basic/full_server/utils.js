const fs = require('fs').promises;

function readDatabase(filePath) {
  return fs.readFile(filePath, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim());
      lines.shift();

      const students = {};
      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      });

      // let output = `Number of students: ${lines.length}\n`;

      // Object.keys(students).forEach((field) => {
      //   output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      // });

      return students;
    })
    .catch((err) => {
      throw Error(err);
    });
}

module.exports = readDatabase;
