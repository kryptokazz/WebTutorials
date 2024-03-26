### Question 1
Compare and contrast the #name and age fields

```typescript

export class Person {
  #name = ""
  private age = 1
}

/* #name is a JS private field it's checked during run time and build time
 private age is a TypeScript private field it's only checked during build time */


```

### Question 2 
```typescript
const a = "Frontend Masters"
let b = "Frontend Masters"
 
const c = { learnAt: "Frontend Masters" }
let d = { learnAt: "Frontend Masters" }
 
const e = Object.freeze({ learnAt: "Frontend Masters" })

/* a, b and e are immutable because a: string, b: string and all strings in JS are immutable
not to be confused with const and let which define if a variable is reassignable.
Objects are mutable data types but e is immutable when Object.freeze method is used. */
```

### Question 3
```typescript
const str = "hello"
let val =
  /* ??? */
  console.log(val) // ['h', 'e', 'l', 'l', 'o']

// str.split("") 

```

### Question 4

```typescript
const str = "hello"
let val =
  /* ??? */
  console.log(val)
/**
 * {
 *   '0': 'h',
 *   '1': 'e',
 *   '2': 'l',
 *   '3': 'l',
 *   '4': 'o'
 * }
 */

{ ... str.split("") }

```
