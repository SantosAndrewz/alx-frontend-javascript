/*
 * module implements a class HolbertonCourse
 * attributes: name (String), length (Number), students (array of Strings)
 * Each attribute stored in an 'underscore' attribute version
 * Implements a getter and setter for each attribute.
 */
export default class HolbertonCourse {
/* eslint-disable no-underscore-dangle */

  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Gets the name of the course.
  get name() {
    return this._name;
  }

  // Sets the name of the course.
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Gets the length of the course
  get length() {
    return this._length;
  }

  // Sets the lenght of the course
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Gets the names of students in the course.
  get students() {
    return this._students;
  }

  // Sets the names of the students in the course.
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
