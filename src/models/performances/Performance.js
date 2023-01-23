/* eslint-disable no-underscore-dangle */
import DataItem from './DataItem';

import KindTranslate from './KindTranslate';

const translateKind = new KindTranslate();
translateKind.setLanguage('fr');

/**
 * Represents a user's performance data
 */
export default class Performances {
  /**
   * Creates a new instance of the Performances class
   * @param {object} data - An object containing the user's performance data
   * @param {number} data.userId - The user's ID
   * @param {object} data.kind - An object that maps numbers to performance types
   * @param {DataItem[]} data.data - An array of DataItem objects representing the user's performance data
   */
  constructor(data) {
    this._userId = data.userId;
    this._kind = translateKind.kind;
    this._dataItem = data.data.map((item) => new DataItem(item));
  }

  /**
   * Gets the user's ID
   * @return {number} The user's ID
   */
  get userId() {
    return this._userId;
  }

  /**
   * Gets the object that maps numbers to performance types
   * @return {object} An object that maps numbers to performance types
   */
  get kind() {
    return this._kind;
  }

  /**
   * Gets the array of DataItem objects representing the user's performance data
   * @return {DataItem[]} An array of DataItem objects representing the user's performance data
   */
  get dataItem() {
    return this._dataItem;
  }
}
