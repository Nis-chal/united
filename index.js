const isArray = [1, 2, 3, 4, 5];

let filterArray = isArray.filter((item) => item > 2);
let isItemGreater = isArray.some((item) => item > 4);
let isItemGreaterV2 = isArray.some((item) => item > 6);
let isEveryItem = isArray.every((item) => item > 0);
let isMapped = isArray.map((item) => item * 4);
const isFind = isArray.find((item) => item > 2);

console.log(filterArray, "filter");
console.log(isItemGreater, "some");
console.log(isItemGreaterV2, "some");
console.log(isEveryItem, "every");
console.log(isMapped, "map");
console.log(isFind);



