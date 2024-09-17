const isArray = [1, 2, 3, 4, 5];
const stringArray = ["John", "Gomez", "Terry", "Anna", "lorry"];

let filterArray = isArray.filter((item) => item > 2);
let isItemGreater = isArray.some((item) => item > 4);
let isItemGreaterV2 = isArray.some((item) => item > 6);
let isEveryItem = isArray.every((item) => item > 0);
const isMapped = isArray.map((item) => item * 4);
