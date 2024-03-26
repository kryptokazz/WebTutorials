

## ES1 (1997): Introduced basic JavaScript features like variables, data types, functions, loops, etc.
```javascript
// Example of a variable in ES1
var name = "John Doe";
console.log(name); // Output: "John Doe"

// Example of a function in ES1
function add(a, b) {
    return a + b;
}
console.log(add(1, 2)); // Output: 3
```

## ES2 (1998): Minor updates focused on bug fixes and clarifications.

## ES3 (1999): Significant update with features like try/catch exception handling and regular expressions.
```javascript
// Example of regular expressions in ES3
var text = "Hello, World!";
var regex = /Hello/;
console.log(regex.test(text)); // Output: true

// Example of try-catch statement in ES3
try {
    var x = y + 1;
} catch (error) {
    console.log(error); // Output: ReferenceError: y is not defined
}
```

## ES5 (2009): Added features like strict mode, JSON support, Array methods, and Object.create().

```javascript
// Strict mode
"use strict";
x = 3.14; // This will cause an error because x is not declared

// JSON support
var obj = { "name": "John", "age": 30 };
var jsonString = JSON.stringify(obj);

// Array methods
var numbers = [1, 2, 3, 4, 5];
var doubled = numbers.map(function(num) {
  return num * 2;
});

// Object.create()
var person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
var person2 = Object.create(person);
person2.firstName = "Jane";
console.log(person2.fullName()); // Output: Jane Doe
```

## ES6 (2015): Groundbreaking release with enhancements like let/const declarations, arrow functions, classes, modules, Set/Map data structures, and Promises.
``` javascript
// let/const declarations
let x = 10;
const y = 20;

// Arrow functions
const add = (a, b) => a + b;

// Classes
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

// Modules
// Assume we have a module named 'math.js' exporting functions
import { sum, multiply } from './math.js';

// Set/Map data structures
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);

let myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);

// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Async operation here
    resolve('Data fetched successfully');
  });
};
```

## ES7 (2016): Introduced features like the exponentiation operator (**), Array.prototype.includes(), and syntactical improvements.
```javascript
// Exponentiation operator (**)
let result = 2 ** 3; // 8

// Array.prototype.includes()
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true

// Syntactical improvements
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
```


## ES8 (2017): Added async/await syntax, Object.values()/Object.entries() methods, and features for concurrency and atomics.
```javascript
// async/await syntax
async function fetchData() {
  let result = await someAsyncOperation();
  return result;
}

// Object.values()/Object.entries() methods
let obj = { a: 1, b: 2, c: 3 };
let values = Object.values(obj);
let entries = Object.entries(obj);

// Features for concurrency and atomics
// These are low-level features, no simple example available
```

## ES9 (2018): Introduced Rest/Spread properties, asynchronous iteration, and Promise.prototype.finally().
```javascript
// Rest/Spread properties
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

// Asynchronous iteration
async function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

// Promise.prototype.finally()
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log('Request completed.'));
```


## ES10 (2019): Brought features like Array.prototype.flat(), Array.prototype.flatMap(), Object.fromEntries(), and optional catch binding in try/catch statements
```javascript
// Array.prototype.flat()
let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(2); // [1, 2, 3, [4]]

// Array.prototype.flatMap()
let array = [1, 2, 3];
let mapped = array.flatMap(x => [x * 2]);
console.log(mapped); // [2, 4, 6]

// Object.fromEntries()
let entries = [['a', 1], ['b', 2], ['c', 3]];
let obj = Object.fromEntries(entries);
console.log(obj); // {a: 1, b: 2, c: 3}

// Optional catch binding in try/catch statements
try {
  // Some code that may throw an error
} catch {
  // Catch block with no specified error variable
  console.log('An error occurred');
}
```

## ES11 ES11, also known as ES2020, introduced features like BigInt for larger integers, Promise.allSettled(), Nullish Coalescing Operator (??), and Optional Chaining (?.).
```javascript
// Optional Chaining Operator (?.)
let user = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York',
    // no zip
  }
};
let zip = user.address?.zip; // zip will be undefined if address or zip is missing

// Nullish Coalescing Operator (??)
let defaultValue = 'default';
let someValue = null;
let result = someValue ?? defaultValue; // result will be 'default' if someValue is null or undefined
```

## ES12, or ES2021, brought additional logical assignment operators, numeric separators, Promise.any(), and String.prototype.replaceAll().
```javascript
// String.prototype.replaceAll()
let str = 'Hello, world!';
let newStr = str.replaceAll('l', 'L'); // 'HeLLo, worLd!'

// Numeric Separators
let billion = 1_000_000_000; // Same as 1000000000

// Promise.any()
let promises = [
  fetch('/endpoint1').then(response => response.json()),
  fetch('/endpoint2').then(response => response.json()),
  fetch('/endpoint3').then(response => response.json())
];
Promise.any(promises)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

## Moving forward, ES13 is also known as ES2022 and includes features like "Array.prototype.flatMap()" and "Object.fromEntries()".

```javascript
// Logical Assignment Operators (||=, &&=, ??=)
let a = 1;
a ||= 2; // a will remain 1 because 1 || 2 is truthy
let b = undefined;
b ??= 3; // b will be assigned 3 because it's undefined
```

## ES14 (2023) 
let arr = [3, 1, 2];
let sortedArr = arr.toSorted();
console.log(sortedArr);  // Output: [1, 2, 3]
console.log(arr);  // Output: [3, 1, 2]

```javascript
let arr = [3, 1, 2];
let sortedArr = arr.toSorted();
console.log(sortedArr);  // Output: [1, 2, 3]
console.log(arr);  // Output: [3, 1, 2]
//    The toSorted() method is like sort(), but it returns a new sorted array, leaving the original array unchanged.

//    The with() method allows modifying a single element based on its index and returning a new array.
let arr2 = ['apple', 'banana', 'cherry'];
let newArr2 = arr2.with(1, 'blueberry');
console.log(newArr2);  // Output: ['apple', 'blueberry', 'cherry']
console.log(arr2);  // Output: ['apple', 'banana', 'cherry']

```

### Difference between `var`, `const`, and `let`

## var
```javascript
// var has global scope
var greeter = "Hello, World!"

function myFunction() {
  var greeter = "Goodbye World!"
}

var greeter = "Hello, World!"

if (true) {
  var greeter = "say Goodbye World! instead";
}

// console.log(greeter); will be polluted as both var greeter
// variables are hoisted to var
```
## let 
```javascript
// let is block scoped and can't be accessed outside scope
let greeter = "Hello, World!"

if (true) {
  let greeting = "say Goodbye World! instead";
  console.log(greeting)
}
// console.log(greeting) outside the block will be a reference error

let greeter = "Hello, World!";
greeter = "say Goodbye World! instead";
console.log(greeter);
// in let we can't declare a variable more than once, but we can modify its value

console.log(greeter);
let greeter = "Hello, World!";
// gives an error message
```

## Undeclared variable
```javascript
try {
  console.log(undeclaredVariable); // This will throw a ReferenceError
} catch (error) {
  console.error("Error: Undeclared variable");
}
```

## Null value
```javascript
let nullableVariable = null;
if (nullableVariable === null) {
  console.log("Nullable variable is null");
} else {
  console.log("Nullable variable is not null");
}
```


## Null value alternative 
```javascript
const isUndefined = val => val === undefined;

isUndefined(undefined); // true

```

## Undefined value
```javascript
let undefinedVariable;
if (typeof undefinedVariable === 'undefined') {
  console.log("Undefined variable is undefined");
} else {
  console.log("Undefined variable is defined");
{
```

## Undefine value alternative
```javascript
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```

## Nil value 
```javascript
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
isNil(''); // false
```

## Boolean value 
```javascript
const isBoolean = val => typeof val === 'boolean';

isBoolean(true); // true
isBoolean(false); // true
isBoolean('true'); // false
isBoolean(null); // false
```
## Number value
```javascript
const isNumber = val => typeof val === 'number' && !Number.isNaN(val);

isNumber(1); // true
isNumber('1'); // false
isNumber(NaN); // false
```

## Prototype 
```javascript

const animal = {
  dna: 'ATCG',
};

const dog = {
  face: '🐺',
}

Object.setPrototypeOf(dog, animal);

Object.getPrototypeOf(dog) === animal; // true

Object.getPrototypeOf(animal) === Object.prototype; // true

Object.getPrototypeOf(Object.prototype) === null; // true
```

## Destructuring
```javascript

// Object destructuring
const person = {
  name: 'John',
  age: 32,
  city: 'New York',
  country: 'USA'
};

const { name, age } = person;

// Object destructuring with alias

const { name: firstName, age: years } = person;

// Array destructuring
const fruits = ['apple', 'banana', 'orange'];
const [first, second, third] = fruits;

```

### Spread Syntax 
```javascript
const obj = { 
    foo: 1, 
    bar: 2, 
    baz: 3 
};
const newObj = {
    foo: 4
    ...obj,
};
console.log(newObj); // { foo: 1, bar: 2, baz: 3 }
```

### Array Methods

#### map()
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

#### filter()
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```
#### reduce()
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
```

#### forEach()
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));
// Output:
// 1
// 2
// 3
// 4
// 5
```
### Object Methods

#### Object.keys()

```javascript
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
console.log(keys); // Output: ['a', 'b', 'c']
```
#### Object.values()
```javascript
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
console.log(values); // Output: [1, 2, 3]
```
#### Object.entries()
```javascript
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
console.log(entries); // Output: [['a', 1], ['b', 2], ['c', 3]]
```
### Async/Await
```javascript
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
// Output:
// calling
// (after 2 seconds) resolved
```
### Promises

#### Chaining Promises
```javascript

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000)
  .then(() => {
    console.log('One second has passed');
    return delay(2000);
  })
  .then(() => {
    console.log('Two more seconds have passed');
  });
// Output:
// (after 1 second) One second has passed
// (after additional 2 seconds) Two more seconds have passed
```
#### Error Handling with Promises
```javascript
function rejectPromise() {
  return new Promise((resolve, reject) => {
    reject(new Error('Promise rejected'));
  });
}

rejectPromise()
  .then(() => console.log('Promise resolved'))
  .catch(error => console.error('Caught an error:', error.message));
// Output:
// Caught an error: Promise rejected
```

### Spread Operator
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

const person = {
  name: 'John',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

```

### Optional Chaining
```javascript
const person = {
  name: 'John',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const city = person.address?.city;
console.log(city); // Output: New York

const phoneNumber = person.contact?.phone; // If contact is undefined, phoneNumber will be undefined
console.log(phoneNumber); // Output: undefined
```

### Nullish Coalescing
```javascript
const name = null;
const defaultName = 'Anonymous';

const finalName = name ?? defaultName;
console.log(finalName); // Output: Anonymous

const number = 0;
const defaultNumber = 42;

const finalNumber = number ?? defaultNumber;
console.log(finalNumber); // Output: 0 (because 0 is not null or undefined)
```

### Closures
```javascript
function outerFunction() {
  const outerVariable = 'I am from outerFunction';
  
  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: I am from outerFunction
```

### Higher Order Functions
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

function speak(greetingFunction, name) {
  const greeting = greetingFunction(name);
  console.log(greeting);
}

speak(greet, 'John'); // Output: Hello, John!
```

## Callback passing functions 
```javascript 
// Example 1: Callback function as an argument
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // invoking the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// Example 2: Asynchronous callback
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched successfully!";
    callback(data); // invoking the callback function with data
  }, 2000);
}

function processData(data) {
  console.log("Processing data:", data);
}

fetchData(processData);
```
### Array iteration with Callback
```
// Using forEach to iterate over an array
const numbers = [1, 2, 3, 4, 5];

// Callback function to print each number
function printNumber(num) {
  console.log(num);
}

// Passing callback function to forEach
numbers.forEach(printNumber);
```

### Asynchronous Operations with Callbacks
```javascript
// Simulating an asynchronous operation with setTimeout
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched successfully!";
    callback(data); // invoking the callback function with data
  }, 2000);
}

// Callback function to process data
function processData(data) {
  console.log("Processing data:", data);
}

// Using fetchData with callback
fetchData(processData);
```

## Scoping
```javascript
// Example 1: Global Scope
let globalVar = "I am global";

function printGlobal() {
  console.log(globalVar); // Accessible because it's in global scope
}

printGlobal();

// Example 2: Local Scope
function printLocal() {
  let localVar = "I am local";
  console.log(localVar); // Accessible only within this function
}

printLocal();
// console.log(localVar); // Throws ReferenceError: localVar is not defined

// Example 3: Block Scope (Introduced in ES6 with let and const)
{
  let blockVar = "I am in a block";
  console.log(blockVar); // Accessible only within this block
}

// console.log(blockVar); // Throws ReferenceError: blockVar is not defined

// Example 4: Lexical Scope (Closures)
function outerFunction() {
  let outerVar = "I am outer";

  function innerFunction() {
    console.log(outerVar); // Accessing outerVar from outer function's scope
  }

  return innerFunction;
}

const innerFn = outerFunction();
innerFn(); // Prints "I am outer" because of lexical scoping
```

