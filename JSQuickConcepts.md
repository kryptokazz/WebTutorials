
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
### Array.isArray
```javascript
alert(Array.isArray([])); //true



```


