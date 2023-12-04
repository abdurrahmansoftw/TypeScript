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
const userDetails = (id, user) => {
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};
userDetails(1, { name: 'a', age: 4 });
const sayHello = (user) => {
    console.log(`hello ${user.name}, your age is ${user.age}`);
};
