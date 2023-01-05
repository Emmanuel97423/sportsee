/* eslint-disable no-underscore-dangle */
// import ActivitySessionData from './ActivitySessionData';

/**
 * class ActivitySession - data modeling
 */

export default class ActivitySession {
  constructor(data) {
    // console.log('data:', data);
    // this._userId = data.userId;
    // this._sessions = data.sessions;
    this._day = data.day;
    this._kilogram = data.kilogram;
    this._calories = data.calories;
  }

  /**
   * Get the sessions array
   * @return [sessions] The _sessions value
   */

  get session() {
    return this._sessions;
  }

  /**
   * Get the day value
   * @return {day} The _day value
   */

  get day() {
    // console.log(' this._day:', this._day)
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

  /**
   * Get the
   */
}
