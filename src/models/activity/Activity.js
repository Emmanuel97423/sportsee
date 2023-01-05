/* eslint-disable no-underscore-dangle */

/**
 * class Activity - data modeling
 */
import ActivitySession from './ActivitySession';

export default class Activity {
  constructor(data) {
    // this._userId = data.userId;
    this._sessions = data.map((element) => new ActivitySession(element));
  }
  /**
   * Get the userId value
   * @return {userId} The _userId value
   */

  //   get userId() {
  //     return this._userId;
  //   }

  /**
   * Get the session value
   * @return {session} The _session value
   */

  get sessions() {
    return this._sessions;
  }
}
