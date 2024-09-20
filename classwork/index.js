import { products } from "../data/product.js";
import { isValue } from "./data.js";

const isFind = products.find((item) => item.name === "Laptop"); /// finds elements in the array

const product = {
  name: "Laptop",
  category: "Electronics",
  price: 999.99,
  inStock: true,
  rating: 4.5,
  "Product Rating": 5,
};

console.log(Object.keys(product)); // returns only the keys
console.log(Object.values(product)); // returns values
console.log(Object.entries(product)); // makes object into array

console.log(product.category); // gets

console.log(product["Product Rating"]);
console.log(product["rating"]);

const isArray = [1, 2, 3, 4, 5];

const isReduce = isArray.reduce((acc, item) => {
  return acc + item;
}, 0);

console.log(isReduce); //
