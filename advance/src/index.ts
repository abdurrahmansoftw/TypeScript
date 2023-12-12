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
// let phone = <HTMLvalueElement>document.getElementById('app');
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
// class Account {
//   readonly id: number;
//   owner: string;
//   banalce: number;
//   nichname?: string;

//   constructor(id: number, owner: string, banalce: number) {
//     this.id = id;
//     this.owner = owner;
//     this.banalce = banalce;
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error('Amount should be greater than 0');
//     this.banalce += amount;
//   }
// }
// new Instance Creation and Initialization of class
// let account = new Account(1, 'akaid', 0);

// account.deposit(100);
// console.log(account instanceof Account);

//  Access Control Keywords
// class Account {
//   nickname?: string;

//   constructor(public readonly id: number, public owner: string, private _balance: number) {}
//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error('Amount should be greater than 0');
//     this._balance += amount;
//   }
//   get balance(): number {
//     return this._balance;
//   }
// }
// let account = new Account(1, 'akaid', 0);
// console.log(account.balance);

// Index Signatures
// class SeatAssignment {
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();
// seats.A1 = 'John';
// seats.A2 = 'Mary';
// console.log(seats.A1);

// Static Members
// class Ride {
//   static _activeRides: number = 0;

//   start() {
//     Ride._activeRides++;
//   }
//   stop() {
//     Ride._activeRides--;
//   }
//   static get activeRides(): number {
//     return Ride._activeRides;
//   }
// }

// let ride = new Ride();
// ride.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(Ride._activeRides);

// Inheritance

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName(): string {
//     return `Student ${this.firstName} ${this.lastName}`;
//   }
//   protected walk() {
//     console.log('Walking');
//   }
// }

// class Student extends Person {
// constructor(public studentId: number, firstName: string, lastName: string) {
// super(firstName, lastName);
//   }
//   protected takeTest() {
//     this.walk();
//     console.log('Taking test');
//   }
// }
// Method overriding
// class Teacher extends Person {
// override get fullName(): string {
// return `Professor ` + super.fullName;
// }
// }
// let teacher = new Teacher('John', 'Doe');
//
// class Pricipal extends Teacher {
// override get fullName(): string {
// return `Principal ` + super.fullName;
// }
// }
//
// Polymorphism behavior of a class to change based on the type of data it is holding
// function printNames(people: Person[]) {
// for (let person of people) {
// console.log(person.fullName);
// }
// }
//
// printNames([new Student(1, 'Mary', 'Smith'), new Teacher('John', 'Doe'), new Pricipal('Jane', 'Doe')]);

//  Private vs Protected Members

// 15- Abstract Classes and Methods

// abstract class Shape {
//   constructor(public color: string) {}
//   abstract render(): void;
// }

// class Circle extends Shape {
//   constructor(color: string, public radius: number) {
//     super(color);
//   }
//   override render(): void {
//     console.log(`Rendering a circle of radius ${this.radius} and color ${this.color}`);
//   }
// }

// let shape = new Circle('red', 10);
// shape.render();

// Interfaces

// abstract class Calender {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

// interface Calender {
//   name: string;
//   addEvent(): void;
//   removeEvent(): void;
// }

// interface CloudCalender extends Calender {
//   sync(): void;
// }

// class GoogleCalendar implements Calender {
//   constructor(public name: string) {}
//   addEvent(): void {
//     throw new Error('Method not implemented.');
//   }
//   removeEvent(): void {
//     throw new Error('Method not implemented.');
//   }
// }

// Generics class

// class KeyValuePair<K, V> {
//   constructor(public key: K, public value: V) {}
// }
// let pair = new KeyValuePair(1, 'First');
// console.log(pair.key, pair.value);

// Generics Function

// class ArrayUtils {
//   static wrapInArray<T>(value: T): T[] {
//     return [value];
//   }
// }

// let numbers = ArrayUtils.wrapInArray(1);

// Generics Interface

// interface Result<T> {
//   data: T | null;
//   error: string | null;
// }

// function fetch<T>(url: string): Result<T> {
//   return {
//     data: null,
//     error: null,
//   };
// }

// interface User {
//   userName: string;
// }

// interface Product {
//   title: string;
// }

// let user = fetch<User>('url');
// user.data?.userName;

// let product = fetch<Product>('url');
// product.data?.title;

// Generic Constraints

// interface Person {
// name: string;
// }

// class Person {
//   constructor(public name: string) {}
// }

// class Customar extends Person {}

// function echo<T extends Person>(value: T): T {
//   return value;
// }

// echo(new Person('John'));
// echo(new Customar('John'));

// Extending generic Classes
// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   protected _objects: T[] = [];

//   add(object: T) {
//     this._objects.push(object);
//   }
// }

// Pass on the generic type parameter to the base class
// class CompressibleStore<T> extends Store<T> {
//   compress() {}
// }
// let store = new CompressibleStore<Product>();
// store.compress();

// Restricting the generics type parameter
// class SearchableStore<T extends { name: string }> extends Store<T> {
//   find(name: string): T | null {
//     return this._objects.find((item) => item.name === name) ?? null;
//   }
// }

// Fix The generics type parameter
// class ProductStore extends Store<Product> {
//   filterByCategory(category: string): Product[] {
//     return this._objects.filter((item) => item.name === category);
//   }
// }

// let store = new Store<Product>();
// store.add({ name: 'Shirt', price: 100 });
