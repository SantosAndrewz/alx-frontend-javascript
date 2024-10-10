/*
 * Module implements a class Airport
 * Constructor attributes: name(String), code(String) each stored as an underscore attribute
 * The default string description of the class returns the airport code.
 */

export default class Airport {
/* eslint-disable no-underscore-dangle */

  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Overrides the toStringTag and returns the airport code..
  toString() {
    return this._code;
  }
}
