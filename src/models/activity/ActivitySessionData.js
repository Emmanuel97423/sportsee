/* eslint-disable no-underscore-dangle */

/**
 * class ActivitySession - data modeling
 */

export default class ActivitySessionData {
  constructor(data) {
    // console.log('ActivitySessionData:', data);
    this._day = data.day;
    this._kilogram = data.kilogram;
    this._calories = data.calories;
  }
  /**
   * Get the day value
   * @return {day} The _day value
   */

  get day() {
    return this._day;
  }

  /**
   * Get the kilogram value
   * @return {kilogram} The _kilogram value
   */

  get kilogram() {
    return this._kilogram;
  }
  /**
   * Get the calories value
   * @return {calories} The _calories value
   */

  get calories() {
    return this._calories;
  }
}
