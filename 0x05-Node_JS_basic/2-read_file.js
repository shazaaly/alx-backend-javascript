const fs = require('fs');

const students = {};

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    if (!data) {
        console.log('Cannot load the database');
        return
    }
    const lines = data.split('\n');
    lines.shift();
    lines.forEach((line) => {
        if (line.trim() !== ''){
            const [firstname, , , field] = line.split(',');
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstname);
            
        }

    });
    const fields = Object.keys(students);
    fields.forEach((field) => {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;