// ============================================
// CONDITIONAL STATEMENTS IN JAVASCRIPT
// ============================================

// 1. IF STATEMENT
// Executes code block if condition is true
let age = 18;
if (age >= 18) {
    console.log("You are an adult");
}

// 2. IF-ELSE STATEMENT
// Executes one block if true, another if false
let temperature = 25;
if (temperature > 30) {
    console.log("It's hot");
} else {
    console.log("It's not hot");
}

// 3. IF-ELSE IF-ELSE STATEMENT
// Multiple conditions
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// 4. SWITCH STATEMENT
// Compares a value against multiple cases
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}

// 5. TERNARY OPERATOR (? :)
// Shorthand for if-else
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);

// 6. LOGICAL OPERATORS
// && (AND), || (OR), ! (NOT)
let hasLicense = true;
let hasInsurance = true;

if (hasLicense && hasInsurance) {
    console.log("Can drive");
}

if (hasLicense || hasInsurance) {
    console.log("Has at least one");
}

if (!hasLicense) {
    console.log("Cannot drive");
}

// 7. TRUTHY AND FALSY VALUES
// Falsy: false, 0, "", null, undefined, NaN
// Everything else is truthy
let value = "";
if (value) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// 8. NULLISH COALESCING (??)
// Returns right operand if left is null/undefined
let username = null;
let defaultName = username ?? "Guest";
console.log(defaultName); // "Guest"

// 9. OPTIONAL CHAINING (?.)
// Safely access nested properties
let user = { profile: { name: "John" } };
console.log(user?.profile?.name); // "John"
console.log(user?.address?.city); // undefined (no error)

// 10. SHORT-CIRCUIT EVALUATION
let result = true || console.log("Not executed");
let result2 = false && console.log("Not executed");