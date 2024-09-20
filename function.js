import { productLink } from "./data/product.js";

// const isArrow = async ({ name }) => {
//   try {
//     const response = await fetch(productLink);
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e.message);
//   } finally {
//     console.log("finally");
//   }
//   console.log(name);
// };

// isArrow({ name: "John" });

const spread = [1, 2, 3, 4, 5];

function spreadOperator(...rest) {
  console.log(rest[0]); // first index of array element

  const { name, surname } = rest[0];
  console.log(name);
  console.log(...spread);
}

spreadOperator({ name: "john", surname: "Doe" });
