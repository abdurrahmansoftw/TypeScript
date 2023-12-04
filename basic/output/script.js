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
const myFunc = (a, b, c = false) => {
    return a + b;
};
console.log(myFunc(1, 2, true));
