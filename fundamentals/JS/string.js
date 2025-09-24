// JavaScript String Guide

// 1. String Creation
let str1 = 'Single quotes';
let str2 = "Double quotes";
let str3 = `Template literal`;

// 2. String Properties
const text = "JavaScript";
console.log(text.length); // 10

// 3. String Methods for Manipulation
// Case transformation
console.log("hello".toUpperCase()); // "HELLO"
console.log("WORLD".toLowerCase()); // "world"

// Trimming
console.log("  Hello  ".trim()); // "Hello"
console.log("  Hello  ".trimStart()); // "Hello  "
console.log("  Hello  ".trimEnd()); // "  Hello"

// Padding
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0")); // "500"

// Replace
console.log("Hello World".replace("World", "JavaScript")); // "Hello JavaScript"
console.log("Hello World World".replaceAll("World", "JS")); // "Hello JS JS"

// 4. String Searching
const sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.includes("fox")); // true
console.log(sentence.startsWith("The")); // true
console.log(sentence.endsWith("dog")); // true
console.log(sentence.indexOf("fox")); // 16
console.log(sentence.lastIndexOf("the")); // 31

// 5. String Extraction
console.log("Hello World".slice(0, 5)); // "Hello"
console.log("Hello World".substring(6, 11)); // "World"
console.log("Hello World".split(" ")); // ["Hello", "World"]

// 6. Template Literals
const name = "JavaScript";
console.log(`Hello, ${name}!`); // "Hello, JavaScript!"

// 7. Utility Functions
// Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"

// Check if palindrome
function isPalindrome(str) {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return normalized === reverseString(normalized);
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

// Capitalize first letter of each word
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalizeWords("hello world")); // "Hello World"