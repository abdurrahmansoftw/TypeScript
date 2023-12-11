// let sales: number = 123_456_789;
// let course: string = 'TypeScript';
// let isFree: boolean = false;
// let level;

// function render(document: any) {
//   console.log(document);
// }

// render(123);

// let numbers: number[] = [1, 2, 3, 4, 5];

// numbers.forEach((number) => console.log(number));

// Tuples
// let tuple: [number, string, boolean] = [1, 'abc', true];
// tuple.push(1);
// tuple.push('abc');
// tuple.push(true);
// tuple.push(2);
// tuple.push('def');

// Enums
// const small = 0;
// const medium = 1;
// const large = 2;

// PascleCase for classes
// const enum Sizes {
//   small = 1,
//   medium,
//   large,
// }
// let mySize: Sizes = Sizes.small;
// console.log(mySize);

// function calculateTax(a: number): number
// function calculateTax(amount: number, taxYear: number): number {
//   if (taxYear < 2024) return amount * 0.05;
//   else return amount * 0.1;
// }

// let taxValue: number = calculateTax(100, 12);
// console.log(`2 args: ${taxValue}`);

// let employee: { readonly id: number; name: string; retire: (date: Date) => void } = {
//   id: 1,
//   name: 'John',
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// Type Alias
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: 'John',
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// Union Types
// function kgToLbs(weight: number | string): number {
//   if (typeof weight === 'string') {
//     weight = parseFloat(weight);
//   }
//   return weight / 2.2;
// }
// kgToLbs(100);
// kgToLbs('100');

// Intersection Types
// let weight: number & string;

// type Draggable = {
//   drag: () => void;
// };
// type Resizable = {
//   resize: () => void;
// };
// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// Literal Types
// type Quality = 50 | 100;

// let quality: Quality = 100;

// type Metric = 'kg' | 'lbs';
// let weight: Metric = 'kg';

// Null and Undefined value
function greet(name: string) {
  console.log(name.toUpperCase());
}
greet(null);
