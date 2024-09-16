import { productLink } from "./data/product.js";

async function name(params) {}
async function fetchData() {
  const response = await fetch(productLink);
  const data = await response.json();
  return console.log(data);
}
fetchData();
