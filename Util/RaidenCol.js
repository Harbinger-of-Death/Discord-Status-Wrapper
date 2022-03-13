"use strict";
class RaidenCol extends Map {
    /**
     * Returns the count of how many elemets are in the collection
     */
    get size() {
        return super.size;
    }
    /**
     * Identical to Array.map() where as it returns a mapped Array of the collection
     */
    map(fn) {
        // console.log(iter.next())
        let array = [];
        for (let [key, val] of this) {
            array.push(key);
        }
        return array.map(fn);
    }
    /**
     * An equivalent method for the map method of this class but it maps by it's values that returns true from fn
     */
    mapVal(fn) {
        let val = this.values();
        return Array.from({
            length: this.size
        }, () => {
            let values = val.next();
            return fn(values.value);
        }).filter(item => item);
    }
    /**
     * Returns the first value in the Collection else undefined if collection is empty
     */
    first() {
        if (this.size <= 0)
            return undefined;
        return this.values().next().value;
    }
    /**
     * Finds 1 element in the value and returns it if fn is true
     * @returns {any}
     */
    find(fn) {
        for (let [key, val] of this) {
            if (fn(val))
                return val;
        }
        return undefined;
    }
    /**
     * @return {this}
     */
    filter(fn) {
        let result = new this.constructor[Symbol.species];
        for (let [key, val] of this) {
            if (fn(val))
                result.set(key, val);
        }
        return result;
    }
    /**
     * This method is similar to filter method of this class but filters keys instead of values
     * @returns {this}
     */
    filterKey(fn) {
        let result = new this.constructor[Symbol.species];
        for (let [key, val] of this) {
            if (fn(key))
                result.set(key, val);
        }
        return result;
    }
    /**
     * Returns the last value in the Collection
     */
    last() {
        if (this.size <= 0)
            return undefined;
        return Array.from(this.values())[Array.from(this.values()).length - 1];
    }
    /**
     * Returns the last key in the collection
     */
    lastKey() {
        return this.keyArray()[this.keyArray().length - 1];
    }
    tap(fn) {
        fn(this);
        return this;
    }
    has(k) {
        return super.has(k)
    }
    array() {
        return Array.from(this.values())
    }
    keyArray() {
        return Array.from(this.keys());
    }
    hasAll(...c) {
        if(Array.isArray(c[0])) {
            return c[0].every(o => super.has(o))
        } else {
            return c.every(o => super.has(o))
        }
    }

    hasAny(...keys) {
        if(Array.isArray(keys[0])) {
            return keys[0]?.some(o => super.has(o))
        } else {
            return keys?.some(o => super.has(o))
        }
    }

    random() {
        let array = Array.from(this.values())[Math.floor(Math.random() * this.size)];
        return array;
    }
    get(k) {
        return super.get(k);
    }
    every(fn) {
        for (let [key, val] of this) {
            if (!fn(val, key))
                return false;
        }
        return true;
    }
    each(fn) {
        this.forEach(fn);
        return this;
    }
    randomKey() {
        return Array.from(this.keys())[Math.floor(Math.random() * this.size)];
    }
    equals(collection) {
        if(!collection) return false;
        if (this.size !== collection.size)
            return false;
        if (this === collection)
            return true;
        for (let [key, val] of this) {
            if (collection.has(key) || val !== collection.get(key))
                return false;
        }
        return true;
    }
    difference(collection) {
        if (this.size !== collection.size)
            return `size difference by: ${Math.abs(this.size - collection.size)}`;
        return Array.from(collection.keys()).filter(value => !this.has(value));
    }

    findKey(fn) {
        for(let [key, val] of this) {
            if(fn(key, val)) return key
        }
        return this
    }

    sort(fn = RaidenCol.compareFunction) {
        const entries = [...this.entries()]   
        entries.sort((a, b) => fn(a[1], b[1], a[0], b[0]))     
        super.clear()
        for(let [key, val] of entries) {
            super.set(key, val)
        }
        return this
    }

    clear() {
        return super.clear()
    }

    static compareFunction(one, two) {
        return Number(one > two || one === two) - 1
    }
}

module.exports = RaidenCol
