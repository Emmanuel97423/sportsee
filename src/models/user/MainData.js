/* eslint-disable no-underscore-dangle */

/**
 * class UserData - User data modeling
 */

export default class UserData {
  /**
   * @constructor
   * @param {Array} data - The data value.
   * @param {string|number} data.id -  The id of user
   * @param {string} data.userInfos.firstName -  The firstName of user
   * @param {string} data.userInfos.lastName -  The lastName of user
   * @param {number} data.userInfos.age -  The age of user
   * @param {number} data.userInfos.todayScore -  The todayScore of user
   * @param {number} data.userInfos.calorieCount -  The calorieCount of user
   * @param {number} data.userInfos.proteinCount -  The proteinCount of user
   * @param {number} data.userInfos.carbohydrateCount -  The carbohydrateCount of user
   * @param {number} data.userInfos.lipidCount -  The lipidCount of user
   *
   */

  constructor(data) {
    this._id = data.id;
    this._firstName = data.userInfos.firstName;
    this._lastName = data.userInfos.lastName;
    this._age = data.userInfos.age;
    this._todayScore = data.todayScore ? data.todayScore : data.score;
    this._calorieCount = data.keyData.calorieCount;
    this._proteinCount = data.keyData.proteinCount;
    this._carbohydrateCount = data.keyData.carbohydrateCount;
    this._lipidCount = data.keyData.lipidCount;
  }
  /**
   * Get the id value.
   * @return {number} The id value
   */

  get id() {
    return this._id;
  }

  /**
   * Get the firstName value.
   * @return {string} The id value
   */

  get firstName() {
    return this._firstName;
  }

  /**
   * Get the lastName value.
   * @return {string} The lastName value
   */

  get lastName() {
    return this._lastName;
  }

  /**
   * Get the age value.
   * @return {number} The age value
   */

  get age() {
    return this._age;
  }

  /**
   * Get the todayScore value.
   * @return {number} The todayScore value
   */

  get todayScore() {
    return this._todayScore;
  }

  /**
   * Get the calorieCount value
   * @return {number} calorieCount value
   */

  get calorieCount() {
    return this._calorieCount;
  }

  /**
   * Get the proteinCount
   * @return {number} proteinCount value
   *
   */

  get proteinCount() {
    return this._proteinCount;
  }

  /**
   * Get the carbohydrateCount
   * @return {number} carbohydrateCount value
   *
   */

  get carbohydrateCount() {
    return this._carbohydrateCount;
  }

  /**
   * Get the lipidCount
   * @return {number} lipidCount value
   *
   */

  get lipidCount() {
    return this._lipidCount;
  }
}
