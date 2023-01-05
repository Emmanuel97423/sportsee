/* eslint-disable no-underscore-dangle */

/**
 * class AverageSession - data modeling
 */
export default class AverageSession {
  constructor(data) {
    this._day = data.day;
    this._sessionLength = data.sessionLength;
  }

  /**
   * Get the day value
   * @return {day} The _day value
   */
  get day() {
    return this._day;
  }

  /**
   * Get the sessionLength value
   * @return {day} The _sessionLength value
   */

  get sessionLength() {
    return this._sessionLength;
  }
}
