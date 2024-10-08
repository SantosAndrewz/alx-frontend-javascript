/*
 * Module implements a class Building
 * Constructor attributes with attribute 'sqft (Number)' stored sunder the underscore attribute.
 * implements a getter for each attribute.
 * class Building should be considered an abstract class.
 * any class extending from it should implement a method 'evacuationwarningMessage'.
 */

export default class Building {
/* eslint-disable no-underscore-dangle */

  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  // gets the sqft for the Building
  get sqft() {
    return this._sqft;
  }

  // sets the sqft for the Building
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }
}
