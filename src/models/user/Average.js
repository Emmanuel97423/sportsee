/* eslint-disable no-underscore-dangle */

/**
 * class UserData - User data modeling
 */

export default class Average {
  /**
   * Creates an instance of ActivitySession.
   * @constructor
   * @param {array} data - The data to initialize the Average instance with.
 
   */
  constructor(data) {
    this._userId = data.userId;
    this._session = data;
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
