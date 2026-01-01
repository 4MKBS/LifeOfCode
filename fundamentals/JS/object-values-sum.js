// Sum object values

const obj = { a: 1, b: 2 };
const total = Object.values(obj).reduce((sum, n) => sum + n, 0);
