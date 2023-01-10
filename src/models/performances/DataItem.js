/* eslint-disable no-underscore-dangle */

/**
 * Represents a value of performance for a given type
 */
export default class DataItem {
  /**
   * Creates a new instance of the DataItem class
   * @param {object} data - An object containing the performance data
   * @param {number} data.value - The value of the performance
   * @param {number} data.kind - The number of the performance type
   */
  constructor(data) {
    this._values = data.value;
    this._kinds = data.kind;
  }

  /**
   * Gets the value of the performance
   * @return {number} The value of the performance
   */
  get value() {
    return this._values;
  }

  /**
   * Gets the number of the performance type
   * @return {number} The number of the performance type
   */
  get kind() {
    return this._kinds;
  }
}
