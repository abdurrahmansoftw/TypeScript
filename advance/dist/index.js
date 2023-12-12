"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `Student ${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking test');
    }
}
class Teacher extends Person {
    get fullName() {
        return `Professor ` + super.fullName;
    }
}
let teacher = new Teacher('John', 'Doe');
class Pricipal extends Teacher {
    get fullName() {
        return `Principal ` + super.fullName;
    }
}
printNames([new Student(1, 'Mary', 'Smith'), new Teacher('John', 'Doe'), new Pricipal('Jane', 'Doe')]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
