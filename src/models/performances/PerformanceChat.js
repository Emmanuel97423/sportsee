export default class Performance {
  /**
   * @param {number} userId - The ID of the user this performance belongs to.
   * @param {Object[]} data - An array of objects representing the performance data.
   * Each object should have a 'value' property and a 'kind' property.
   */
  constructor(userId, data) {
    this.userId = userId;
    this.data = data;
  }
}
