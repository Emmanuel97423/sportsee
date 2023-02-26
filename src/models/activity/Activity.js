/* eslint-disable no-underscore-dangle */

/**
 * class Activity - data modeling
 */
import ActivitySession from './ActivitySession';

export default class Activity {
  /**
   * Creates an instance of Activity.
   * @constructor
   
   * @param {Array} data - The Activity data of the user.
   */

  constructor(data) {
    this._sessions = data.sessions.map(
      (element) => new ActivitySession(element)
    );
  }
  /**
   * Get the userId value
   * @return {userId} The _userId value
   */

  /**
   * Get the session value
   * @return {session} The _session value
   */

  get sessions() {
    return this._sessions;
  }
}
