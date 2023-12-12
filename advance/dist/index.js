"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(object) {
        this._objects.push(object);
    }
    find(property, value) {
        return this._objects.find((item) => item[property] === value);
    }
}
let store = new Store();
store.add({ name: 'Shirt', price: 100 });
store.find('name', 1);
