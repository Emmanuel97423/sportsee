/* eslint-disable no-underscore-dangle */
export default class DayConverter {
  constructor() {
    this._days = {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D',
    };
  }

  getDayOfWeek(dayNum) {
    return this._days[dayNum];
  }
}
