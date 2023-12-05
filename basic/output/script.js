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
// class Player {
//   constructor(private name: string, public age: number, private country: string) {}
//   play() {
//     console.log(`${this.name} from ${this.country} is playing, he is ${this.age} years old`);
//   }
// }
// const player1 = new Player('mosh', 40, 'use');
// const player2 = new Player('alu', 40, 'india');
// const player3 = new Player('potol', 40, 'Bangladesh');
// const players: Player[] = [player1, player2, player3];
// console.log(players.map((player) => player.play()));
// typescript interface
// interface User {
//   name: string;
//   age: number;
//   country: string;
//   printDetails(): string;
// }
// class Player implements User {
//   constructor(public name: string, public age: number, public country: string) {}
//   printDetails() {
//     return `${this.name} from ${this.country} is playing, he is ${this.age} years old`;
//   }
// }
// const player1 = new Player('akaid', 25, 'use');
// const player2 = new Player('alukha', 20, 'india');
// const players: User[] = [player1, player2];
// console.log(players.map((player) => player.printDetails()));
// GENERICS -> flexible reusable code with type safety and intellisense support
// const addID = <T extends object>(obj: T) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// let user = addID({
//   name: 'alukha',
//   age: 4,
// });
// console.log(user);
// Interface GENERICS
// interface APIResponse<T> {
//   status: number;
//   type: string;
//   data: T;
// }
// const response1: APIResponse<object> = {
//   status: 200,
//   type: 'good',
//   data: { name: 'alukha', age: 4 },
// };
