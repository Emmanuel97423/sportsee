/* eslint-disable no-underscore-dangle */
import AverageSession from './AverageSession';

/**
 * Class for representing average data of a user.
 * @class
 */

export default class Average {
  /**
   * Creates an instance of Average.
   * @constructor
   * @param {object} data - The data to initialize the Average instance with.
   * @param {string} data.userId - The ID of the user.
   * @param {Array} data.sessions - The sessions data of the user.
   */

  constructor(data) {
    this._userId = data.userId;
    this._sessions = data.sessions.map(
      (session) => new AverageSession(session)
    );
  }

  /**
   * Get the user ID of the user.
   * @returns {string} The user ID.
   */

  get userId() {
    return this._userId;
  }

  /**
   * Get the sessions of the user.
   * @returns {Array} The sessions of the user.
   */

  get sessions() {
    return this._sessions;
  }
}
