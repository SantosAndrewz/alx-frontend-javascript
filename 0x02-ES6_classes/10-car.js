/*
 * Module implements a class Car
 * Constructor attributes brand(string), motor(string), color(string) in underscore version.
 * Method cloneCar returns a new object of the class.
 */

export default class Car {
/* eslint-disable no-underscore-dangle */

  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const CarClone = this.constructor[Symbol.species];

    return new CarClone();
  }
}
