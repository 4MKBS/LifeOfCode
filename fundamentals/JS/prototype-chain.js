// Prototype chain inspection

const base = { kind: 'base' };
const child = Object.create(base);
child.name = 'child';

console.log(child.kind); // inherited
console.log(Object.getPrototypeOf(child) === base); // true
console.log(Object.getOwnPropertyNames(child)); // ['name']
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(child))); // ['kind']
console.log(Object.getPrototypeOf(Object.getPrototypeOf(child)) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(child))) === null); // true
