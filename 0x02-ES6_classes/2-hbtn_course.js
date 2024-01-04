export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (!Array.isArray(students) || students.every((std) => typeof std !== 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
