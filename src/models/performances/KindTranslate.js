/* eslint-disable no-underscore-dangle */
export default class KindTranslate {
  /**
   * @constructor
   * Initializes the _kind property with workout types and their translations in English.
   */
  constructor() {
    this._kind = {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
    };
  }

  /**
   * @getter
   * Returns the current _kind property.
   */
  get kind() {
    return this._kind;
  }

  /**
   * @method setLanguage
   * @param {string} language - The language to set the translations to.
   * Switches the _kind property to the translations of the workout types in the specified language.
   */
  setLanguage(language) {
    switch (language) {
      case 'fr':
        this._kind = {
          1: 'Cardio',
          2: 'Energie',
          3: 'Endurance',
          4: 'Force',
          5: 'Vitesse',
          6: 'Intensité'
        };
        break;
      case 'es':
        this._kind = {
          1: 'cardio',
          2: 'energía',
          3: 'resistencia',
          4: 'fuerza',
          5: 'velocidad',
          6: 'intensidad'
        };
        break;
      default:
        break;
    }
  }
}
