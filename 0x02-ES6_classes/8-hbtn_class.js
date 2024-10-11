/*
 * Module implements a class HolbertonClass
 * Constructor attributes: size(Number), location(String) stored in an underscore attributes
 * Returns: size when class cast into a Number and location when class cast into a String.
 */
export default class HolbertonClass {
/* eslint-disable no-underscore-dangle */

  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Using [Symbol.toPrimitive] to handle typecasting
  [Symbol.toPrimitive](value) {
    if (value === 'number') {
      return this._size;
    }
    if (value === 'string') {
      return this._location;
    }
    return this;
  }
}
