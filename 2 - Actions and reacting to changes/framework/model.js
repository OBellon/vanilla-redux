export class Model {
    constructor() {
        this.attributes = {};
    }

    set(property, value) {
        this.attributes[property] = value;
    }
}