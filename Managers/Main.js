const Summary = require("../Structures/Summary");
class Main {
    constructor(base) {
        Object.defineProperty(this, "base", {
            value: base
        })
    }

    async getSummary() {
        const summary = await this.base.api.get(`${this.base.root}/summary.json`)
        return new Summary(summary, this.base)
    }
}

module.exports = Main