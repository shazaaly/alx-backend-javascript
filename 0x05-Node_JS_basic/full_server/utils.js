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

      return students;
    })
    .catch((err) => {
      throw Error(err);
    });
}

module.exports = readDatabase;
