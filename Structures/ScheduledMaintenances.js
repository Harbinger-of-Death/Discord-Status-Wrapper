const Base = require("./Base");

class ScheduledMaintenances extends Base {
    constructor(data = {}, base) {
        super(base)
        this.id = data.id ?? null
        this.createdAt = data.created_at ? new Date(data.created_at) : null
        this.impact = data.impact ?? null
        this.incidentUpdates = new RaidenCol(data.incident_pdates?.map(o => [o.id, new IncidentUpdates(o, this.base)]))
        this.monitoringAt = data.monitoring_at ? new Date(data.monitoring_at) : null
        this.name = data.name ?? null
        this.pageId = data.page_id ?? null
        this.resolvedAt = data.resolved_at ? new Date(data.resolved_at) : null
        this.shortlink = data.shortlink ?? null
        this.status = data.status ?? null
        this.updatedAt = data.updated_at ? new Date(data.updated_at) : null
    }
}

module.exports = ScheduledMaintenances