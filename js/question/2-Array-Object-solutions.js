// 1. Write a function that takes an array of numbers and returns a new array with each number multiplied by 3.
function multiplyByThree(arr) {
  return arr.map((num) => num * 3);
}
console.log(multiplyByThree([1, 2, 3])); // Expected output: [3, 6, 9]

// 2. Write a function that filters out all even numbers from an array of numbers.
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Expected output: [1, 3, 5]

// 3. Write a function that takes an array of numbers and returns their product.
function productOfNumbers(arr) {
  return arr.reduce((acc, num) => acc * num, 1);
}
console.log(productOfNumbers([1, 2, 3, 4])); // Expected output: 24

// 4. Write a function that finds the first number greater than 10 in an array.
function findNumber(arr) {
  return arr.find((num) => num > 10);
}
console.log(findNumber([4, 8, 11, 20])); // Expected output: 11

// 5. Write a function that checks if any number in an array is divisible by 5.
function isDivisibleByFive(arr) {
  return arr.some((num) => num % 5 === 0);
}
console.log(isDivisibleByFive([4, 9, 15])); // Expected output: true

// 6. Write a function that checks if all numbers in an array are positive.
function areAllPositive(arr) {
  return arr.every((num) => num > 0);
}
console.log(areAllPositive([1, 2, -3, 4])); // Expected output: false

// 7. Write a function that sorts an array of numbers in descending order.
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}
console.log(sortDescending([5, 2, 9, 1])); // Expected output: [9, 5, 2, 1]

// 8. Write a function that returns the first 3 elements from an array.
function getFirstThree(arr) {
  return arr.slice(0, 3);
}
console.log(getFirstThree([10, 20, 30, 40, 50])); // Expected output: [10, 20, 30]

// 9. Write a function that returns all the keys of an object.
function getKeys(obj) {
  return Object.keys(obj);
}
const obj = { name: "Alice", age: 25, city: "Paris" };
console.log(getKeys(obj)); // Expected output: ['name', 'age', 'city']

// 10. Write a function that returns all the values of an object.
function getValues(obj) {
  return Object.values(obj);
}
console.log(getValues(obj)); // Expected output: ['Alice', 25, 'Paris']
