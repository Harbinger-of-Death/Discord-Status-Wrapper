const Base = require("./Base");

class IncidentUpdates extends Base {
    constructor(data = {}, base) {
        super(base)
        this.id = data.id ?? null
        this.body = data.body ?? null
        this.createdAt = data.created_at ? new Date(data.created_at) : null
        this.displayAt = data.display_at ? new Date(data.display_at) : null
        this.updatedAt = data.updated_at ? new Date(data.updated_at) : null
        this.incidentId = data.incident_id ?? null
        this.status = data.status ?? null
    }
}

module.exports = IncidentUpdates