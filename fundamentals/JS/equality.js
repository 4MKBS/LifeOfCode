// Equality: == vs ===

console.log(0 == false); // true (coercion)
console.log(0 === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log('5' == 5); // true (coercion)
console.log('5' === 5);
    // false
console.log([] == false); // true (coercion)
console.log([] === false); // false

// Object equality
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
const obj3 = obj1;
console.log(obj1 == obj3); // true
console.log(obj1 === obj3); // true

// Summary
// Use === to avoid unexpected type coercion issues.    
// Use == only when you specifically want type coercion.
console.log('5' === 5); // false
console.log('5' == 5); // true
