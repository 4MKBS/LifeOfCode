// JavaScript Data Types with Examples and Explanation

// JavaScript has two main categories of data types:
// 1. Primitive Data Types
// 2. Non-Primitive (Reference) Data Types

// 1. Primitive Data Types
// These are immutable and stored directly in the stack memory.

// a) Number
let age = 25; // Integer
let price = 99.99; // Float
let infinityValue = Infinity; // Special numeric value
let notANumber = NaN; // Result of invalid numeric operations
console.log(typeof age); // Output: "number"

// b) String
let name = "John Doe"; // Double quotes
let greeting = 'Hello, World!'; // Single quotes
let templateLiteral = `Hi, ${name}`; // Template literals
console.log(typeof name); // Output: "string"

// c) Boolean
let isActive = true;
let isLoggedIn = false;
console.log(typeof isActive); // Output: "boolean"

// d) Undefined
let notAssigned;
console.log(notAssigned); // Output: undefined
console.log(typeof notAssigned); // Output: "undefined"

// e) Null
let emptyValue = null;
console.log(emptyValue); // Output: null
console.log(typeof emptyValue); // Output: "object" (this is a known quirk in JavaScript)

// f) Symbol (ES6)
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // Output: "symbol"

// g) BigInt (ES11)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // Output: "bigint"

// 2. Non-Primitive (Reference) Data Types
// These are mutable and stored in the heap memory.

// a) Object
let person = {
    name: "Alice",
    age: 30,
    isEmployed: true,
};
console.log(typeof person); // Output: "object"

// b) Array
let colors = ["red", "green", "blue"];
console.log(typeof colors); // Output: "object"

// c) Function
function greet() {
    return "Hello!";
}
console.log(typeof greet); // Output: "function"

// d) Date (Built-in Object)
let currentDate = new Date();
console.log(currentDate); // Output: Current date and time
console.log(typeof currentDate); // Output: "object"

// Special Notes:
// - JavaScript is dynamically typed, meaning variables can hold any data type and can change types at runtime.
let dynamicVariable = 42; // Initially a number
dynamicVariable = "Now a string"; // Now a string
console.log(typeof dynamicVariable); // Output: "string"

// Type Checking
// Use `typeof` for primitive types and `instanceof` for objects.
console.log(colors instanceof Array); // Output: true
console.log(person instanceof Object); // Output: true

// Conclusion:
// Understanding data types is crucial for writing efficient and bug-free JavaScript code. Always choose the right data type for your use case.
