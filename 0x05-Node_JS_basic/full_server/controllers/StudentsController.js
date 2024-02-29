const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(filepath)
      .then((data) => {
        let response = 'This is the list of our students\n';
        let fields = Object.keys(data);
        let alphaSortedFields = fields.sort();
        alphaSortedFields.forEach(field => {
          let studentsNum = data[field].length;
          let namesList = data[field].join(', ');
          response += `Number of students in ${field}: ${studentsNum}. List: ${namesList}\n`;
        });
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }


  static getAllStudentsByMajor(req, res){
    res.status(200)
    let major = req.params.major;
    if (major !== 'CS' &&  major !== 'SE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return
        
    }
    readDatabase(filepath)
    .then((data) => {
        let stdArr = data[major].sort()
        let stdList = stdArr.join(', ')
    })
    .catch((err) => {
        res.status(500).send('Cannot load the database');
    })
    



  }
}

module.exports = StudentsController;