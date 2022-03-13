const REST = require("../Rest/REST");
const Main = require("../Managers/Main");
class BaseClass {

    get root() {
        return `https://discordstatus.com/api/v2`
    }


    get main() {
        return new Main(this)
    }

    get api() {
        return new REST()
    }
}

module.exports = BaseClass