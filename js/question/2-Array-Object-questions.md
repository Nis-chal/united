Here are 10 questions related to JavaScript array and object methods, along with expected inputs and outputs.

### Array Methods Questions

1. **Using `map`:**
   - **Question:** Write a function that takes an array of numbers and returns a new array with each number multiplied by 3.
   - **Example:**
     ```js
     multiplyByThree([1, 2, 3]); // Expected output: [3, 6, 9]
     ```

2. **Using `filter`:**
   - **Question:** Write a function that filters out all even numbers from an array of numbers.
   - **Example:**
     ```js
     filterEvenNumbers([1, 2, 3, 4, 5]); // Expected output: [1, 3, 5]
     ```

3. **Using `reduce`:**
   - **Question:** Write a function that takes an array of numbers and returns their product.
   - **Example:**
     ```js
     productOfNumbers([1, 2, 3, 4]); // Expected output: 24
     ```

4. **Using `find`:**
   - **Question:** Write a function that finds the first number greater than 10 in an array.
   - **Example:**
     ```js
     findNumber([4, 8, 11, 20]); // Expected output: 11
     ```

5. **Using `some`:**
   - **Question:** Write a function that checks if any number in an array is divisible by 5.
   - **Example:**
     ```js
     isDivisibleByFive([4, 9, 15]); // Expected output: true
     ```

6. **Using `every`:**
   - **Question:** Write a function that checks if all numbers in an array are positive.
   - **Example:**
     ```js
     areAllPositive([1, 2, -3, 4]); // Expected output: false
     ```

7. **Using `sort`:**
   - **Question:** Write a function that sorts an array of numbers in descending order.
   - **Example:**
     ```js
     sortDescending([5, 2, 9, 1]); // Expected output: [9, 5, 2, 1]
     ```

8. **Using `slice`:**
   - **Question:** Write a function that returns the first 3 elements from an array.
   - **Example:**
     ```js
     getFirstThree([10, 20, 30, 40, 50]); // Expected output: [10, 20, 30]
     ```

### Object Methods Questions

9. **Using `Object.keys`:**
   - **Question:** Write a function that returns all the keys of an object.
   - **Example:**
     ```js
     const obj = { name: "Alice", age: 25, city: "Paris" };
     getKeys(obj); // Expected output: ['name', 'age', 'city']
     ```

10. **Using `Object.values`:**
   - **Question:** Write a function that returns all the values of an object.
   - **Example:**
     ```js
     const obj = { name: "Alice", age: 25, city: "Paris" };
     getValues(obj); // Expected output: ['Alice', 25, 'Paris']
     ```