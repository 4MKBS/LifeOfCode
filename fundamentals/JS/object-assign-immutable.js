// Immutable update with Object.assign

const user = { name: 'Ava', age: 30 };
const older = Object.assign({}, user, { age: 31 });
