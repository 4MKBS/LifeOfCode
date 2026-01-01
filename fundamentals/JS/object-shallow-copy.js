// Shallow copy patterns

const obj = { a: 1, nested: { b: 2 } };
const copy1 = { ...obj };
const copy2 = Object.assign({}, obj);
