// StructuredClone for deep cloning

function deepClone(obj) {
  return structuredClone(obj);
}

// Example usage:
const original = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    zip: "12345"
  },
  hobbies: ["reading", "chess"]
};

const cloned = deepClone(original);
console.log(cloned);

// Note: structuredClone is supported in modern browsers and Node.js 17+.
// For environments that do not support structuredClone, consider using
// libraries like lodash's _.cloneDeep or implementing a custom deep clone function.