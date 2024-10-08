/*
 * Module imports a class ClassRoom from '0-classroom.js'
 * Implements a function initializeRooms.
 * Function returns an array of 3 ClassRoom objects with the sizes 19, 20, and 34.
 */

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
