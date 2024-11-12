/* eslint-disable */
export default class HbtnClass {
    constructor(size, location) {
        if (typeof size !== 'number') {
            throw new TypeError('Size must be a number');
        }
        if (typeof location !== 'string') {
            throw new TypeError('Location must be a string');
        }

        this._size = size;
        this._location = location;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Size must be a number');
        }
        this._size = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Location must be a string');
        }
        this._location = value;
    }
    
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this._size;
        }
        if (hint === 'string') {
            return this._location;
        }
        return null;
    }
}