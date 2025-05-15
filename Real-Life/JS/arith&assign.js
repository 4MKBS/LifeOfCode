// Arithmetic and Assignment Operators in JavaScript
// Arithmetic 
let x = 10 + 5;
x = x - 3; // Subtraction
x = x * 2; // Multiplication
x = x / 4; // Division
x = x % 3; // Modulus
x = x ** 2; // Exponentiation
console.log(x) // Output: 15

// Assignment Operators
let y = 10;
y += 5; // Addition assignment
y -= 3; // Subtraction assignment
y *= 2; // Multiplication assignment
y /= 4; // Division assignment
y %= 3; // Modulus assignment
y **= 2; // Exponentiation assignment
console.log(y); // Output: 1

// Bitwise Operators
let a = 5; // 0101 in binary
let b = 3; // 0011 in binary

let andResult = a & b; // Bitwise AND
console.log(andResult); // Output: 1 (0001 in binary)

let orResult = a | b; // Bitwise OR
console.log(orResult); // Output: 7 (0111 in binary)

let xorResult = a ^ b; // Bitwise XOR
console.log(xorResult); // Output: 6 (0110 in binary)

let notResult = ~a; // Bitwise NOT
console.log(notResult); // Output: -6 (inverts all bits)

let leftShift = a << 1; // Left shift
console.log(leftShift); // Output: 10 (1010 in binary)

let rightShift = a >> 1; // Right shift
console.log(rightShift); // Output: 2 (0010 in binary)

let unsignedRightShift = a >>> 1; // Unsigned right shift
console.log(unsignedRightShift); // Output: 2 (0010 in binary)
