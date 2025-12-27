// JSON.stringify replacer

const data = { a: 1, b: 2 };
const custom = JSON.stringify(data, (key, value) =>
  key === "b" ? undefined : value
);

console.log("Custom JSON string:", custom); // {"a":1}

export { custom };
