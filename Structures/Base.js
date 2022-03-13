class Base {
    constructor(base) {
        Object.defineProperty(this, "base", {
            value: base
        })
    }
}

module.exports = Base