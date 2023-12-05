"use strict";
// let a: (string | number | boolean)[] = ['a', false, 4];
// console.log(a);
// let c: {
//   name: string;
//   age: number;
//   isAdult: boolean;
// };
// c = {
//   name: 'a',
//   age: 4,
//   isAdult: false,
// };
// console.log(c);
// const myFunc = (a: number, b: number, c: boolean = false): number => {
//   return a + b;
// };
// console.log(myFunc(1, 2, true));
// const userDetails = (id: string | number, user: { name: string; age: number }) => {
//   console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
// };
// userDetails(1, { name: 'a', age: 4 });
// const sayHello = (user: { name: string; age: number }) => {
//   console.log(`hello ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`);
// };
// function signature - type of function
// let add: (x: number, y: number, z?: number) => number;
// add = (a: number, b: number, c?: number) => {
//   return a + b;
// };
// console.log(add(1, 2));
// class Player {
//   name: string;
//   age: number;
//   country: string;
//   constructor(n: string, a: number, c: string) {
//     this.name = n;
//     this.age = a;
//     this.country = c;
//   }
//   play() {
//     console.log(`${this.name} from ${this.country} is playing, he is ${this.age} years old`);
//   }
// }
// const player1 = new Player('mosh', 40, 'Bangladesh');
// const player2 = new Player('alu', 40, 'Bangladesh');
// const player3 = new Player('potol', 40, 'Bangladesh');
// const players: Player[] = [player1, player2, player3];
// console.log(players);
// access modifier
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing, he is ${this.age} years old`);
    }
}
const player1 = new Player('mosh', 40, 'Bangladesh');
const player2 = new Player('alu', 40, 'Bangladesh');
const player3 = new Player('potol', 40, 'Bangladesh');
const players = [player1, player2, player3];
console.log(players.map((player) => player.play()));
