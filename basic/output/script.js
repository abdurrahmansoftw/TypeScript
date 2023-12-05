"use strict";
// let a: (string | number | boolean)[] = ['a', false, 4];
// console.log(a);
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    printDetails() {
        return `${this.name} from ${this.country} is playing, he is ${this.age} years old`;
    }
}
const player1 = new Player('mosh', 40, 'use');
const player2 = new Player('alu', 40, 'india');
const players = [player1, player2];
console.log(players.map((player) => player.printDetails()));
