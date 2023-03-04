

export default class Property {
    owner
    extension
    zone
    constructor(owner,zone, extension) {
        this.owner= owner;
        this.zone= zone;
        this.extension= extension;
    }
    total () {
        return this.extension * this.zone.cost
    }
}