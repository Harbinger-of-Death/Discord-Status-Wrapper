const fetch = require("node-fetch");
const FormData = require("form-data");
const StatusAPIError = require("../Errors/StatusAPIError");
const controller = new AbortController()
class REST {
    setToken(token) {
        this.token = token
        return this
    }

    async _make(url, options = {}) {
        const timeout = setTimeout(() => controller.abort(), 1000 * 3)
        const response = await fetch(url, { signal: controller.signal, method: options.method ?? "GET", headers: {
            ...options.body instanceof FormData ? { ...options.body?.getHeaders() } : { "content-type": options.contentType ?? "application/json" },
            authorization: this.token,
            ...options.headers
        }, ...options.body ? { body: options.body instanceof FormData ? options.body : JSON.stringify(options.body) } : undefined })
        const result = response.status !== 204 ? await response.json() : null
        if(![201, 200, 204].includes(response.status)) throw new StatusAPIError({
            code: result.code ?? response.status,
            method: options.method,
            message: result.message,
            url: url,
            requestData: options.body
        })

        clearTimeout(timeout)
        return result
    }

    async get(url, options = {}) {
        return this._make(url, {
            method: "GET",
            ...options
        })
    }

    async post(url, options = {}) {
        return this._make(url, {
            method: "POST",
            ...options
        })
    }

    async delete(url, options = {}) {
        return this._make(url, {
            method: "DELETE",
            ...options,
            body: {}
        })
    }

    async put(url, options = {}) {
        return this._make(url, {
            method: "PUT",
            ...options
        })
    }

    async patch(url, options = {}) {
        return this._make(url, {
            method: "PATCH",
            ...options
        })
    }
}

module.exports = REST