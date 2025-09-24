"use strict";
// Example of 'let'
let age = 25; // 'let' allows you to declare variables that can be reassigned
age = 30; // This is valid
console.log("Age:", age);

// Example of 'var'
var name = "John"; // 'var' is function-scoped and can be redeclared
var name = "Doe"; // Redeclaring with 'var' is allowed
console.log("Name:", name);

// Example of 'const'
const PI = 3.14159; // 'const' is used for variables that should not be reassigned
// PI = 3.14; // This will throw an error because 'const' variables cannot be reassigned
console.log("PI:", PI);

/*
Explanation:
1. 'let' is block-scoped, meaning it is only accessible within the block it is defined in.
2. 'var' is function-scoped and can lead to unexpected behavior due to hoisting.
3. 'const' is also block-scoped but is used for variables that should not be reassigned.
*/