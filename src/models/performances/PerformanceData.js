/* eslint-disable no-underscore-dangle */
export default class PerformanceData {
  constructor(value, kind) {
    console.log('value:', value);
    this._value = value;
    this._kind = kind;
  }

  get value() {
    return this._value;
  }

  get kind() {
    return this._kind;
  }

  getName(kind) {
    return this._kind[this._kind];
  }
}
