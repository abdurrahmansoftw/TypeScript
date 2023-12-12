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
// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase());
//   return 'Helo';
// }
// greet(undefined);

// Optional Parameters
// function calculateTax(amount: number, discount?: number, tax?: number): number {
//   return amount * 1.2;
// }
// calculateTax(100);

// type Customar = {
//   birthday?: Date;
// };

// function getCustumor(customerId: number): Customar | null {
//   return customerId === 0 ? null : { birthday: new Date() };
// }

// let customar = getCustumor(1);
// console.log(customar?.birthday?.getFullYear());

// let log: any = null;
// log?.();

// let speed: number | null = null;

// let ride = {
// Nullish Coalescing
//   speed: speed ?? 40,
// };
// console.log(ride.speed);

// type assertion
// let phone = <HTMLInputElement>document.getElementById('app');
// phone.value = '123';
//

// the unknown type
// function render(document: unknown) {
//   // Type Narrowing
//   if (document instanceof WordDocument) {
//     document.toUpperCase();
//   }
//   document.move();
//   document.fly();
//   document.get();
//   document.send();
// }

// Never Type
// function processEvent(): never {
//   while (true) {}
// }

// processEvent();
// console.log('event');

// Creating Classes
class Account {
  readonly id: number;
  owner: string;
  banalce: number;
  nichname?: string;

  constructor(id: number, owner: string, banalce: number) {
    this.id = id;
    this.owner = owner;
    this.banalce = banalce;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Amount should be greater than 0');
    this.banalce += amount;
  }
}
// new Instance Creation and Initialization of class
let account = new Account(1, 'akaid', 0);

// account.deposit(100);
// console.log(account instanceof Account);
