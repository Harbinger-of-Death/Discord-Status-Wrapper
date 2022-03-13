
export class REST {
    /**
     * Sets the authorization token for this Discord Bot
     */
    public setToken(token: string): this
    /**
     * Make a GET request to the specified url
     * @param url - The url to send a GET request to
     * @param options - The options to send it with
     */
    public get(url: string, options: HTTPOptions): Promise<unknown>
    /**
     * Make a POST request to the specified url
     * @param url - The url to send a POST request to
     * @param options - The options to send it with
     */
    public post(url: string, options: HTTPOptions): Promise<unknown>
    /**
     * Make a PATCH request to the specified url
     * @param url - The url to send a PATCH request to
     * @param options - The options to send it with
     */
    public patch(url: string, options: HTTPOptions): Promise<unknown>
    /**
     * Make a DELETE request to the specified url
     * @param url - The url to send a DELETE request to
     * @param options - The options to send it with
     */
    public delete(url: string, options: HTTPOptions): Promise<unknown>
    /**
     * Make a PUT request to the specified url
     * @param url - The url to send a PUT request to
     * @param options - The options to send it with
     */
    public put(url: string, options: HTTPOptions): Promise<unknown>
}

export class BaseClass {
    /**
     * The REST manager
     */
    public api: REST
    /**
     * The main manager that handles all request
     */
    public main: Main
}

export class Main {
    public constructor(base: BaseClass)
    /**
     * The base class that instantiated this
     */
    public base: BaseClass
    /**
     * Fetches the summary of discord status
     */
    public getSummary(): Promise<Summary>
}

export class Base {
    public constructor(base: BaseClass)
    /**
     * The base class
     */
    public base: BaseClass
}

export class Summary extends Base {
    public constructor(data: {}, base: BaseClass)
    public page: Page
    public components: RaidenCol<string, Components>
    public incidents: RaidenCol<string, Incidents>
    public scheduledMaintenances: RaidenCol<string, ScheduledMaintenances>
}

export class ScheduledMaintenances extends Base {
    public constructor(data: {}, base: BaseClass)
    public id: string
    public createdAt: Date
    public impact: string
    public incidentUpdates: RaidenCol<string, IncidentUpdates>
    public monitoringAt: Date
    public name: string
    public pageId: string
    public resolvedAt: Date
    public shortlink: string
    public status: string
    public updatedAt: Date
}

export class Incidents extends Base {
    public constructor(data: {}, base: BaseClass)
    public id: string
    public createdAt: Date
    public impact: string
    public incidentUpdates: RaidenCol<string, IncidentUpdates>
    public monitoringAt: Date
    public name: string
    public pageId: string
    public resolvedAt: Date
    public shortlink: string
    public status: string
    public updatedAt: Date
}

export class IncidentUpdates extends Base {
    public constructor(data: {}, base: BaseClass)
    public id: string
    public body: string
    public createdAt: Date
    public displayAt: Date
    public updatedAt: Date
    public incidentId: string
    public status: string
}
export class Components extends Base {
    public constructor(data: {}, base: BaseClass)
    public id: string
    public name: string
    public status: string
    public createdAt: Date
    public updatedAt: Date
    public position: number
    public description: string
    public showcase: boolean
    public groupId: string
    public pageId: string
    public group: boolean
    public onlyShowIfDegraded: boolean
}

export interface Page {
    /**
     * The id of this page
     */
    id: string
    /**
     * The name of this page
     */
    name: string
    /**
     * The url of this page
     */
    url: string
    /**
     * The timezone of this page
     */
    timeZone: string
    /**
     * When this page was updated at
     */
    updatedAt: Date
}


export class RaidenCol<K, V> extends Map<K, V> {
    public constructor(iterable: Iterable<readonly [K, V]>)
    /**
     * Returns the very first value in the collection
     */
    public first(): V
    /**
     * Returns the very last value in the collection
     */
    public last(): V
    /**
     * Filters the collection and returns the filtered collection
     */
    public filter(fn: (value: V) => unknown): this
    /**
     * Filters the keys in the collection and returns the filtered collection
     */
    public filterKey(fn: (value: K) => unknown): this
    /**
     * Turns the values in to an array
     */
    public array(): V[]
    /**
     * Turns the keys in to an array
     */
    public keyArray(): K[]
    /**
     * Finds a value in the collection
     */
    public find(fn: (value: V) => unknown): V
    /**
     * Maps the keys
     */
    public map(fn: (value: K) => unknown): K[]
    /**
     * Maps the values. Identical to [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
     */
    public mapVal(fn: (value: V) => unknown): V[]
    /**
     * Returns the very last key in the collection
     */
    public lastKey(): K
    /**
     * Checks if the collection has all keys specified
     */
    public hasAll(...k: K[] | K[][]): boolean
    /**
     * Checks if the collection has any of the keys specified 
     */
    public hasAny(...k: K[] | K[][]): boolean
    /**
     * Returns a randomized values and maps it to an array
     */ 
    public random(): V[]
    /**
     * Checks if the collection has every value specified. Similar to [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
     */
    public every(fn: (value: V, key: K) => unknown): boolean
    /**
     * Similar to forEach method but returns the collection instead of undefined
     */
    public each(fn: (value: V, key: K, map: Map<K, V>) => void): void | this
    /**
     * Returns a randomized key
     */
    public randomKey(): K
    /**
     * Checks if this collection is equal other collection
     */
    public equals(collection: Map<K, V>): boolean
    /**
     * Returns the differences of keys to other collection and maps it to an array
     */
    public difference(collection: Map<K, V>): K[]
    /**
     * Finds a key in the collection
     */
    public findKey(fn: (key: K) => unknown): K
    /**
     * Sorts the collection. Similar to [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
     */
    public sort(compareFn: (one: V, second: V, firstKey: K, secondKey: K) => void): this
}