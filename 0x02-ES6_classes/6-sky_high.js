/*
 * Module imports class Building  from 5-buiiding.js
 * implements a class 'SkyHighBuilding' that extends from 'Building'
 * Constructor attributes: sqft (Number) (assigned to the parent class Building), floors (Number).
 * Each attribute must be stored in an underscore attribute
 * implements a getter for each attribute.
 * Overrides the method 'evacuationWarningMessage'.
 * Returns: 'Evacuate slowly the NUMBER_OF_FLOORS floors'.
 */

import Building from './5-building';

export default class SkyHighBuilding extends Building {
/* eslint-disable no-underscore-dangle */

  constructor(sqft, floors) {
  // assigning sqft to the parent class Building
    super(sqft);
    this._floors = floors;
  }

  // gets the floors
  get floors() {
    return this._floors;
  }

  // Overriding the evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
