const Base = require("./Base");

class Components extends Base {
    constructor(data = {}, base) {
        super(base)

        this.id = data.id ?? null
        this.name = data.name ?? null
        this.status = data.status ?? null
        this.createdAt = data.created_at ? new Date(data.created_at) : null
        this.updatedAt = data.updated_at ? new Date(data.updated_at) : null
        this.position = data.position ?? null
        this.description = data.description ?? null
        this.showcase = data.showcase ?? null
        this.groupId = data.group_id ?? null
        this.pageId = data.page_id ?? null
        this.group = data.group ?? null
        this.onlyShowIfDegraded = data.only_show_if_degraded ?? null
    }
}

module.exports = Components