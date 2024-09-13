### JavaScript Operators, Conditional Statements, and Control Flow

In JavaScript, operators, conditionals, and control flow structures help define how values are manipulated and decisions are made. This tutorial will cover:

1. **Data Types**
2. **Operators**
3. **Conditional Statements**
4. **Control Flow**
5. **Javascript Methods**
6. **Scope**
7. **Function**
8. **Arrow Function**

### 1. **JavaScript Data Types**

JavaScript provides a variety of data types and associated methods for handling and manipulating data. This tutorial will walk through key data types in JavaScript and their common methods.

#### **JavaScript Data Types**

JavaScript has two types of data types:

In JavaScript, **primitive types** and **reference types** are handled differently when stored in variables.

### Primitive Types:

These directly hold a value and are immutable. Changes to a variable containing a primitive type will not affect other variables.

```js
const isString = "Cat";         // string
const isNumber = 3;             // number
const isBoolean = true;         // boolean
const isUndefined;              // undefined (declared but not assigned)
const isNull = null;            // null
const isSymbol = Symbol("id");  // symbol
const isBigInt = 12345678901234567890n;  // big int
```

### Reference Types:

Reference types do not hold the actual data; instead, they hold a reference (or memory address) to the data. These types include objects, arrays, and functions.

```js
const person = { name: "Alice", age: 25 }; // Object
const numbers = [1, 2, 3]; // Array
const greet = function () {
  console.log("Hello!");
}; // Function
const date = new Date(); // Date
const uniqueNumbers = new Set([1, 2, 3]); // Set
const keyValuePairs = new Map([
  ["a", 1],
  ["b", 2],
]); // Map
```

**Note:** Like primitive types, reference types are often stored in `const`, but modifying the contents (like adding properties to an object or items to an array) is allowed without reassigning the variable itself.

---

### 2. **JavaScript Operators**

Operators are symbols used to perform operations on variables and values. They are divided into different categories based on their functions.

#### **Arithmetic Operators**

These are used for basic mathematical operations.

| Operator | Example  | Description          |
| -------- | -------- | -------------------- |
| `+`      | `5 + 3`  | Addition             |
| `-`      | `5 - 3`  | Subtraction          |
| `*`      | `5 * 3`  | Multiplication       |
| `/`      | `6 / 3`  | Division             |
| `%`      | `5 % 2`  | Modulus (remainder)  |
| `**`     | `5 ** 2` | Exponentiation (ES6) |

Example:

```js
let a = 10;
let b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
```

#### **Assignment Operators**

These assign values to variables.

| Operator | Example  | Equivalent to |
| -------- | -------- | ------------- |
| `=`      | `x = 10` | Assign value  |
| `+=`     | `x += 5` | `x = x + 5`   |
| `-=`     | `x -= 5` | `x = x - 5`   |
| `*=`     | `x *= 5` | `x = x * 5`   |
| `/=`     | `x /= 5` | `x = x / 5`   |

Example:

```js
let x = 10;
x += 5; // x = 15
x *= 2; // x = 30
```

#### **Comparison Operators**

These are used to compare values and return a boolean (`true` or `false`).

| Operator | Example     | Description                     |
| -------- | ----------- | ------------------------------- |
| `==`     | `5 == "5"`  | Equal (type coercion)           |
| `===`    | `5 === 5`   | Strict equal (no type coercion) |
| `!=`     | `5 != 3`    | Not equal                       |
| `!==`    | `5 !== "5"` | Strict not equal                |
| `>`      | `5 > 3`     | Greater than                    |
| `<`      | `5 < 3`     | Less than                       |
| `>=`     | `5 >= 3`    | Greater than or equal           |
| `<=`     | `5 <= 3`    | Less than or equal              |

Example:

```js
console.log(5 == "5"); // true (type coercion)
console.log(5 === "5"); // false (no type coercion)
console.log(5 > 3); // true
console.log(5 !== "5"); // true
```

#### **Logical Operators**

Used to combine or invert conditions.

| Operator | Example            | Description |
| -------- | ------------------ | ----------- |
| `&&`     | `true && true`     | true        |
| `&&`     | `false && true`    | false       |
| `\|\|`   | `false \|\| true`  | true        |
| `\|\|`   | `false \|\| false` | false       |
| `!`      | `!true`            | false       |
| `!`      | `!false`           | true        |

Example:

```js
let age = 25;
console.log(age > 18 && age < 30); // true (both conditions true)
console.log(age < 18 || age > 20); // true (one condition is true)
console.log(!(age > 18)); // false (inverts the result)
```

---

### 3. **Conditional Statements**

Conditional statements are used to perform different actions based on different conditions.

#### **if Statement**

The `if` statement executes a block of code if a specified condition is true.

```js
let score = 85;
if (score > 80) {
  console.log("Great job! You passed.");
}
```

#### **if...else Statement**

The `else` statement specifies a block of code to be executed if the condition is false.

```js
let score = 65;
if (score > 80) {
  console.log("Great job! You passed.");
} else {
  console.log("You need to improve.");
}
```

#### **else if Statement**

The `else if` statement allows you to specify a new condition if the first one is false.

```js
let score = 75;
if (score > 90) {
  console.log("Excellent!");
} else if (score > 70) {
  console.log("Good job!");
} else {
  console.log("Keep practicing.");
}
```

#### **Ternary Operator**

A shorthand for `if...else` statements. It takes three operands: a condition, the result if true, and the result if false.

```js
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // "Adult"
```

---

### 4. **Control Flow**

Control flow structures allow you to dictate the flow of execution in a program.

#### **switch Statement**

The `switch` statement executes a block of code depending on the value of an expression.

```js
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("Almost weekend.");
    break;
  default:
    console.log("Mid-week day.");
    break;
}
```

- `break`: Terminates the switch block, ensuring other cases don't execute.
- `default`: Executes if no case matches.

#### **for Loop**

The `for` loop repeats a block of code a certain number of times.

```js
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0 to 4
}
```

---

#### **while Loop**

The `while` loop repeats as long as a condition is true.

```js
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

#### **do...while Loop**

The `do...while` loop will execute the code block at least once, and then it will check the condition.

```js
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5);
```

#### **break and continue**

- **`break`**: Exits the loop immediately.
- **`continue`**: Skips the current iteration and moves to the next.

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break; // Stops the loop at i = 3
  console.log(i); // 0, 1, 2
}

for (let i = 0; i < 5; i++) {
  if (i === 3) continue; // Skips i = 3
  console.log(i); // 0, 1, 2, 4
}
```

### 5. JavaScript Methods

---

#### **String Methods**

A string is a sequence of characters enclosed within single or double quotes.

```js
let str = "Hello, World!";
```

##### Common String Methods:

- **`length`**: Returns the length of the string.
  ```js
  console.log(str.length); // 13
  ```
- **`toUpperCase()`**: Converts the string to uppercase.
  ```js
  console.log(str.toUpperCase()); // "HELLO, WORLD!"
  ```
- **`toLowerCase()`**: Converts the string to lowercase.
  ```js
  console.log(str.toLowerCase()); // "hello, world!"
  ```
- **`charAt(index)`**: Returns the character at the specified index.
  ```js
  console.log(str.charAt(1)); // "e"
  ```
- **`slice(start, end)`**: Extracts a part of a string.
  ```js
  console.log(str.slice(0, 5)); // "Hello"
  ```
- **`split(separator)`**: Splits a string into an array based on a separator.
  ```js
  console.log(str.split(",")); // ["Hello", " World!"]
  ```
- **`replace(oldValue, newValue)`**: Replaces a part of the string with a new value.
  ```js
  console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
  ```

---

#### **Number Methods**

Numbers are data types used to represent integers, floating-point numbers, etc.

```js
let num = 42.567;
```

##### Common Number Methods:

- **`toFixed(digits)`**: Rounds a number to a specified number of decimal places.
  ```js
  console.log(num.toFixed(2)); // "42.57"
  ```
- **`toString()`**: Converts the number to a string.
  ```js
  console.log(num.toString()); // "42.567"
  ```
- **`parseInt(string)`**: Converts a string into an integer.
  ```js
  console.log(parseInt("42.567")); // 42
  ```
- **`parseFloat(string)`**: Converts a string into a floating-point number.
  ```js
  console.log(parseFloat("42.567")); // 42.567
  ```
- **`isNaN(value)`**: Determines if the value is NaN (Not-a-Number).
  ```js
  console.log(isNaN(num)); // false
  ```

---

#### **Array Methods**

An array is a collection of values, which can be of any data type.

```js
let arr = [1, 2, 3, 4, 5];
```

##### Common Array Methods:

- **`push(value)`**: Adds a value to the end of the array.
  ```js
  arr.push(6);
  console.log(arr); // [1, 2, 3, 4, 5, 6]
  ```
- **`pop()`**: Removes the last value from the array.
  ```js
  arr.pop();
  console.log(arr); // [1, 2, 3, 4, 5]
  ```
- **`shift()`**: Removes the first element from the array.
  ```js
  arr.shift();
  console.log(arr); // [2, 3, 4, 5]
  ```
- **`unshift(value)`**: Adds a value to the beginning of the array.
  ```js
  arr.unshift(1);
  console.log(arr); // [1, 2, 3, 4, 5]
  ```
- **`slice(start, end)`**: Returns a portion of the array without modifying the original.
  ```js
  console.log(arr.slice(1, 3)); // [2, 3]
  ```
- **`map(function)`**: Applies a function to each element of the array and returns a new array.
  ```js
  let doubled = arr.map((x) => x * 2);
  console.log(doubled); // [2, 4, 6, 8, 10]
  ```
- **`filter(function)`**: Filters the array based on a function condition.
  ```js
  let even = arr.filter((x) => x % 2 === 0);
  console.log(even); // [2, 4]
  ```

---

#### **Object Methods**

Objects are collections of key-value pairs.

```js
let person = {
  name: "John",
  age: 30,
  city: "New York",
};
```

##### Common Object Methods:

- **`Object.keys(object)`**: Returns an array of keys in the object.
  ```js
  console.log(Object.keys(person)); // ["name", "age", "city"]
  ```
- **`Object.values(object)`**: Returns an array of values in the object.
  ```js
  console.log(Object.values(person)); // ["John", 30, "New York"]
  ```
- **`Object.entries(object)`**: Returns an array of key-value pairs.
  ```js
  console.log(Object.entries(person)); // [["name", "John"], ["age", 30], ["city", "New York"]]
  ```
- **`hasOwnProperty(key)`**: Checks if the object has a specific property.
  ```js
  console.log(person.hasOwnProperty("age")); // true
  ```

---

#### **Set Methods**

A Set is a collection of unique values.

```js
let mySet = new Set([1, 2, 3, 4, 5]);
```

##### Common Set Methods:

- **`add(value)`**: Adds a value to the set.
  ```js
  mySet.add(6);
  console.log(mySet); // Set {1, 2, 3, 4, 5, 6}
  ```
- **`delete(value)`**: Removes a value from the set.
  ```js
  mySet.delete(6);
  console.log(mySet); // Set {1, 2, 3, 4, 5}
  ```
- **`has(value)`**: Checks if a value exists in the set.
  ```js
  console.log(mySet.has(3)); // true
  ```
- **`clear()`**: Removes all values from the set.
  ```js
  mySet.clear();
  console.log(mySet); // Set {}
  ```

---

#### **Map Methods**

A Map is a collection of key-value pairs where the keys can be of any type.

```js
let myMap = new Map();
myMap.set("name", "Alice");
myMap.set("age", 25);
```

##### Common Map Methods:

- **`set(key, value)`**: Adds a key-value pair to the map.
  ```js
  myMap.set("city", "Paris");
  console.log(myMap); // Map {"name" => "Alice", "age" => 25, "city" => "Paris"}
  ```
- **`get(key)`**: Returns the value for a given key.
  ```js
  console.log(myMap.get("name")); // "Alice"
  ```
- **`has(key)`**: Checks if a key exists in the map.
  ```js
  console.log(myMap.has("age")); // true
  ```
- **`delete(key)`**: Removes a key-value pair from the map.
  ```js
  myMap.delete("city");
  console.log(myMap); // Map {"name" => "Alice", "age" => 25}
  ```

---

#### Math Methods

##### 1. Basic Mathematical Operations

- **`Math.round(x)`**

  - Rounds a number to the nearest integer.

  ```javascript
  console.log(Math.round(4.5)); // 5
  console.log(Math.round(4.4)); // 4
  ```

- **`Math.floor(x)`**

  - Rounds a number down to the nearest integer.

  ```javascript
  console.log(Math.floor(4.7)); // 4
  ```

- **`Math.ceil(x)`**

  - Rounds a number up to the nearest integer.

  ```javascript
  console.log(Math.ceil(4.3)); // 5
  ```

- **`Math.trunc(x)`**
  - Returns the integer part of a number by removing any fractional digits.
  ```javascript
  console.log(Math.trunc(4.9)); // 4
  console.log(Math.trunc(-4.9)); // -4
  ```

#### 2. Exponential and Logarithmic Methods

- **`Math.pow(base, exponent)`**
  - Returns the base raised to the power of the exponent.
  ```javascript
  console.log(Math.pow(2, 3)); // 8
  ```

### 8. Scope

**scope** refers to the accessibility or visibility of variables, functions, and objects in different parts of the code during runtime. There are two primary types of scope in JavaScript:

### 1. **Global Scope**

- Variables or functions declared in the global context (outside of any function or block) are in the global scope.
- Global variables are accessible from anywhere in the code, inside functions, or blocks.
- Example:

```js
let globalVar = "I'm global";

function displayGlobal() {
  console.log(globalVar); // Accessible here
}

displayGlobal(); // Output: I'm global
```

### 2. **Local Scope**

- Variables declared inside functions or blocks are in the local scope and are only accessible within that specific function or block.
- **Function Scope**: Variables declared inside a function are scoped to that function.

  ```js
  function myFunction() {
    let localVar = "I'm local";
    console.log(localVar); // Accessible here
  }

  myFunction();
  console.log(localVar); // Error: localVar is not defined
  ```

- **Block Scope**: Variables declared with `let` or `const` inside a block (e.g., within `{}`) are scoped to that block.

  ```js
  if (true) {
    let blockVar = "I'm block-scoped";
    console.log(blockVar); // Accessible here
  }

  console.log(blockVar); // Error: blockVar is not defined
  ```

### Lexical Scope

- Lexical scope means that a function's scope is determined by where it's written in the code, not where it's invoked.
- Functions can access variables from their own scope and any outer scopes where the function was defined.

  ```js
  let outerVar = "I'm outer";

  function outerFunction() {
    let innerVar = "I'm inner";

    function innerFunction() {
      console.log(outerVar); // Can access outer variable
      console.log(innerVar); // Can access inner variable
    }

    innerFunction();
  }

  outerFunction();
  ```

### Summary

- **Global Scope**: Accessible everywhere.
- **Function Scope**: Accessible only inside the function.
- **Block Scope**: Accessible only inside the block if declared with `let` or `const`.
- **Lexical Scope**: Functions can access variables from their outer scopes.

In JavaScript, functions can be written in two common styles: **traditional function declarations** and **arrow functions**.

### 6. **Function Declaration**:

A function is declared with the `function` keyword. This type of function is hoisted, meaning it can be called before it is defined in the code.

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
```

### 7. **Arrow Function**:

Here, a function is assigned to a variable. Unlike function declarations, function expressions are not hoisted.

```js
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Output: Hello, Alice!
```

Introduced in ES6, arrow functions provide a shorter syntax for writing functions. They do not bind their own `this` and are typically used in situations where you don’t need to rebind `this`. Arrow functions are not hoisted.

```js
const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Output: Hello, Alice!
```

- If the function body has a single statement, you can omit the braces and the `return` keyword (this is known as implicit return):

```js
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Alice")); // Output: Hello, Alice!
```

### Key Differences:

1. **`this` keyword**: Arrow functions do not have their own `this`, they inherit it from the surrounding context, whereas traditional functions have their own `this`.
2. **Hoisting**: Function declarations are hoisted, meaning they can be called before being defined, but arrow functions and function expressions are not.

### Conclusion

Understanding JavaScript data types and their associated methods is essential for writing efficient and clean code. These methods provide a wide range of tools to manipulate strings, numbers, arrays, objects, sets, and maps.

```

```

```

```
