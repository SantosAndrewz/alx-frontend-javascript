/*
 * Module implements a class named Currency
 * Constructor attributes: code (String), name (String).
 * Each attribute must be stored in an 'underscore' attribute version.
 * Implements a getter and setter for each attribute.
 * Implements a method displayfullCurrency returning the attributes in format name (code).
 */
export default class currency {
  /* eslint-disable no-underscore-dangle */

  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // gets the code for the Currency
  get code() {
    return this._code;
  }

  // sets the code for the Currency
  set code(value) {
    this._code = value;
  }

  // gets the name for the Currency
  get name() {
    return this._name;
  }

  // sets the name for the currency
  set name(value) {
    this._name = value;
  }

  // Creates a string representation of the Currency and returns a string.
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
