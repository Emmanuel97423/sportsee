/* eslint-disable no-underscore-dangle */

/**
 * class Average - Average data modeling
 */

export default class Average {
  /**
   * Creates an instance of Average.
   * @constructor
   * @param {array} data - The data to initialize the Average instance with.
   * @param {string|number} data.userId - The ID to initialize the Average instance with.
   */
  constructor(data) {
    console.log('data:', data);
    this._userId = data.userId;
    this._session = data.sessions;
  }

  /**
   * Get the userId value
   * @return {userId} the _userId value
   */

  get userId() {
    return this._userId;
  }

  /**
   * Get the session value
   * @return {session} the _session value
   */

  get session() {
    return this._session;
  }
}
