/* eslint-disable no-underscore-dangle */

/**
 * Class representing the DayConverter.
 * @class
 */

export default class DayConverter {
  /**
   * An object with keys as the number of the day and values as the short form of the day.
   * @type {object}
   * @private
   */

  constructor() {
    this._days = {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D'
    };
  }

  /**
   * Get the short form of the day of the week.
   * @param {number} dayNum - The number of the day of the week (1-7).
   * @return {string} The short form of the day of the week.
   */

  getDayOfWeek(dayNum) {
    return this._days[dayNum];
  }
}
