/* eslint-disable no-underscore-dangle */
import AverageSession from './AverageSession';

export default class Average {
  constructor(data) {
    this._userId = data.userId;
    this._sessions = data.sessions.map(
      (session) => new AverageSession(session)
    );
  }

  get userId() {
    return this._userId;
  }

  get sessions() {
    return this._sessions;
  }
}
