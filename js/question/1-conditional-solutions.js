function checkEvenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOrOdd(10)); //  output: "Even"
console.log(checkEvenOrOdd(7)); //  output: "Odd"

function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(findLargest(10, 5, 8)); //  output: 10
console.log(findLargest(12, 25, 20)); //  output: 25
console.log(findLargest(7, 7, 7)); //  output: 7

function containsWord(str, word) {
  return str.includes(word);
}

console.log(containsWord("JavaScript is awesome", "awesome")); //  output: true
console.log(containsWord("Hello World", "world")); //  output: false (case-sensitive)

function canVote(age) {
  return age >= 18;
}

console.log(canVote(20)); //  output: true
console.log(canVote(15)); //  output: false
console.log(canVote(18)); //  output: true

function gradeStudent(marks) {
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 50) return "C";
  return "D";
}

console.log(gradeStudent(95)); //  output: "A"
console.log(gradeStudent(80)); //  output: "B"
console.log(gradeStudent(65)); //  output: "C"
console.log(gradeStudent(45)); //  output: "D"

function isDivisibleBy3And5(number) {
  return number % 3 === 0 && number % 5 === 0;
}

console.log(isDivisibleBy3And5(15)); //  output: true
console.log(isDivisibleBy3And5(10)); //  output: false
console.log(isDivisibleBy3And5(30)); //  output: true

function printRange(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

printRange(1, 5); // Output: 1 2 3 4 5
printRange(3, 8); // Output: 3 4 5 6 7 8
printRange(10, 15); // Output: 10 11 12 13 14 15
