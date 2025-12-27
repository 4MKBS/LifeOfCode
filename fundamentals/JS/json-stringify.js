// JSON.stringify options

const data = { a: 1, b: 2, nested: { c: 3 } };

const pretty = JSON.stringify(data, null, 2);
const filtered = JSON.stringify(data, ["a", "nested"]);
const compact = JSON.stringify(data);

console.log("Pretty JSON:\n", pretty);
console.log("Filtered JSON:", filtered);
console.log("Compact JSON:", compact);

export { pretty, filtered, compact };
