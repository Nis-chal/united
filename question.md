Here are some JavaScript questions focused on functions and conditionals. Each question includes an expected output for you to compare your answers with.

---

### Check if a number is even or odd

Write a function `checkEvenOrOdd` that accepts a number and returns "Even" if the number is even, otherwise return "Odd".

```js
function checkEvenOrOdd(number) {
  // Your code here
}

console.log(checkEvenOrOdd(10)); // Expected output: "Even"
console.log(checkEvenOrOdd(7)); // Expected output: "Odd"
```

### Find the largest number among three

Write a function `findLargest` that accepts three numbers and returns the largest of the three.

```js
function findLargest(a, b, c) {
  // Your code here
}

console.log(findLargest(10, 5, 8)); // Expected output: 10
console.log(findLargest(12, 25, 20)); // Expected output: 25
console.log(findLargest(7, 7, 7)); // Expected output: 7
```

---

### Check if a string contains a specific word

Write a function `containsWord` that checks if a specific word exists within a given string. Return `true` if it exists, otherwise return `false`.

```js
function containsWord(str, word) {
  // Your code here
}

console.log(containsWord("JavaScript is awesome", "awesome")); // Expected output: true
console.log(containsWord("Hello World", "world")); // Expected output: false (case-sensitive)
```

---

### Determine if a person is eligible to vote

Write a function `canVote` that accepts an age and returns `true` if the person is 18 or older, otherwise return `false`.

```js
function canVote(age) {
  // Your code here
}

console.log(canVote(20)); // Expected output: true
console.log(canVote(15)); // Expected output: false
console.log(canVote(18)); // Expected output: true
```

### Grade a student based on marks

Write a function `gradeStudent` that accepts a number (marks) and returns:

- "A" if marks >= 90
- "B" if marks >= 75 and < 90
- "C" if marks >= 50 and < 75
- "D" if marks < 50

```js
function gradeStudent(marks) {
  // Your code here
}

console.log(gradeStudent(95)); // Expected output: "A"
console.log(gradeStudent(80)); // Expected output: "B"
console.log(gradeStudent(65)); // Expected output: "C"
console.log(gradeStudent(45)); // Expected output: "D"
```

### Check if a number is divisible by both 3 and 5

Write a function `isDivisibleBy3And5` that returns `true` if a number is divisible by both 3 and 5, otherwise return `false`.

```js
function isDivisibleBy3And5(number) {
  // Your code here
}

console.log(isDivisibleBy3And5(15)); // Expected output: true
console.log(isDivisibleBy3And5(10)); // Expected output: false
console.log(isDivisibleBy3And5(30)); // Expected output: true
```

---

Try solving these using functions and conditionals.

---

### **Question: Print numbers from `start` to `end`**

Write a function `printRange` that accepts two parameters `start` and `end`. It should print all the numbers from `start` to `end` using a `for` loop.

#### Example:

```js
function printRange(start, end) {
  // Your code here
}

printRange(1, 5); // Output: 1 2 3 4 5
printRange(3, 8); // Output: 3 4 5 6 7 8
printRange(10, 15); // Output: 10 11 12 13 14 15
```

---

### What you need to do:

- Use a `for` loop to iterate from `start` to `end`.
- Print each number in that range.

Would you like me to provide the solution as well?
