class StatusAPIError extends Error {
    constructor(data = {}) {
        super(data.message)
        this.method = data.method
        this.path = data.url
        this.code = data.code
        this.name = `StatusAPIError[${this.code}]: ${this.message}`
        this.requestData = data.body ?? {}
    }
}

module.exports = StatusAPIError