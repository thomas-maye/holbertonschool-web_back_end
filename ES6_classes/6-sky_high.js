/* eslint-disable */
import Building from './5-building.js';
export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        if (typeof floors !== 'number') {
            throw new TypeError('Floors must be a number');
        }

        this._floors = floors;
    }

    get floors() {
        return this._floors;
    }

    set floors(value) {
        this._floors = value;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}