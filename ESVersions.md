

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

