// Variables in JavaScript

// 1. Declaring variables using 'var'
var name = "John"; // 'var' is function-scoped and can be re-declared
console.log(name); // Output: John

// Example: Re-declaring and updating 'var'
var name = "Doe"; // Re-declared
console.log(name); // Output: Doe

// 2. Declaring variables using 'let'
let age = 25; // 'let' is block-scoped and cannot be re-declared in the same scope
console.log(age); // Output: 25

// Example: Updating 'let'
age = 30; // Updated
console.log(age); // Output: 30

// 3. Declaring variables using 'const'
const country = "USA"; // 'const' is block-scoped and cannot be re-assigned
console.log(country); // Output: USA

// Example: Attempting to reassign 'const' (will throw an error)
// country = "Canada"; // Error: Assignment to constant variable

// 4. Variable scope
function testScope() {
    var localVar = "I am local"; // Function-scoped
    if (true) {
        let blockVar = "I am block-scoped"; // Block-scoped
        console.log(blockVar); // Output: I am block-scoped
    }
    // console.log(blockVar); // Error: blockVar is not defined
}
testScope();

// 5. Hoisting
console.log(hoistedVar); // Output: undefined (hoisted but not initialized)
var hoistedVar = "I am hoisted";

// Example: 'let' and 'const' are not hoisted in the same way
// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not hoisted like var";

// 6. Dynamic typing
let dynamicVar = 42; // Initially a number
console.log(typeof dynamicVar); // Output: number
dynamicVar = "Now I am a string"; // Now a string
console.log(typeof dynamicVar); // Output: string

// 7. Undefined and null
let undefinedVar; // Declared but not initialized
console.log(undefinedVar); // Output: undefined

let nullVar = null; // Explicitly set to null
console.log(nullVar); // Output: null

// 8. Global variables
globalVar = "I am global"; // Declared without 'var', 'let', or 'const' (not recommended)
console.log(globalVar); // Output: I am global

// 9. Template literals with variables
let firstName = "Jane";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`; // Using template literals
console.log(fullName); // Output: Jane Doe

// 10. Best practices
// - Use 'const' by default unless you need to reassign the variable
// - Use 'let' if reassignment is necessary
// - Avoid using 'var' to prevent scope-related issues
// - Always declare variables before using them