"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Capitalize(target, methodName, descriptor) {
    let originalMethod = descriptor.get;
    descriptor.get = function () {
        let result = originalMethod === null || originalMethod === void 0 ? void 0 : originalMethod.call(this);
        return result === null || result === void 0 ? void 0 : result.toUpperCase();
    };
}
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Person.prototype, "fullName", null);
let person = new Person('John', 'Doe');
console.log(person.fullName);
