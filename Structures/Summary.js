const Base = require("./Base");
const RaidenCol = require("../Util/RaidenCol");
const Components = require("./Components");
const Incidents = require("./Incidents");
const ScheduledMaintenances = require("./ScheduledMaintenances");
class Summary extends Base {
    constructor(data = {}, base) {
        super(base)
        this.page = "page" in data ? {
            id: data.page.id,
            name: data.page.name,
            url: data.page.url,
            timeZone: data.page.time_zone,
            updatedAt: new Date(data.page.updated_at),
        } : null

        this.components = new RaidenCol(data.components?.map(o => [o.id, new Components(o, this.base)]))
        this.incidents = new RaidenCol(data.incidents?.map(o => [o.id, new Incidents(o, this.base)]))
        this.scheduledMaintenances = new RaidenCol(data.scheduled_maintenances?.map(o => [o.id, new ScheduledMaintenances(o, this.base)]))
    }
}

module.exports = Summary