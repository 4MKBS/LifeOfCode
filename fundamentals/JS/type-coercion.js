// Type coercion and truthiness

// Implicit coercion pitfalls
const sum = '5' + 1; // '51'
const diff = '5' - 1; // 4

// Explicit is clearer
const total = Number('5') + 1; // 6

// Truthy / falsy
const values = [0, '', null, undefined, NaN, false, 'text', 1];
const truthies = values.filter(Boolean); // keeps truthy values

// Double bang to coerce to boolean
const isPresent = !!'hello'; // true
