// Immutability patterns

const state = { count: 1, nested: { done: false } };
const next = { ...state, nested: { ...state.nested, done: true } };

console.log("Original state:", state); // { count: 1, nested: { done: false } }
console.log("Next state:", next);     // { count: 1, nested: { done: true } }

// Immutable array update
const arr = [1, 2, 3];
const newArr = [...arr, 4];

console.log("Original array:", arr);     // [1, 2, 3]
console.log("New array:", newArr);       // [1, 2, 3, 4]

// Immutable removal from array
const filteredArr = arr.filter(num => num !== 2);

console.log("Filtered array:", filteredArr); // [1, 3]

export { state, next, arr, newArr, filteredArr };