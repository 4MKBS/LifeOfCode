// Symbol basics

const id = Symbol('id');
const obj = { [id]: 123, visible: true };

Object.getOwnPropertySymbols(obj); // [Symbol(id)]

console.log(obj[id]); // 123
console.log(obj.visible); // true