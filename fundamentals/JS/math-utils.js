// Math utilities and rounding

const precise = 0.1 + 0.2; // 0.30000000000000004
const fixed = Number(precise.toFixed(2)); // 0.3

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Clamp a number
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

// Safe exponentiation
const pow = Math.pow(2, 8); // 256
const sqrt = Math.sqrt(16); // 4

console.log('Precise:', precise);
console.log('Fixed:', fixed);
console.log('Random Int (1-10):', randomInt(1, 10));
console.log('Clamped (15, 0, 10):', clamp(15, 0, 10));
console.log('2 to the power of 8:', pow);
console.log('Square root of 16:', sqrt);

// Rounding examples
const num = 5.56789;
console.log('Math.floor:', Math.floor(num)); // 5
console.log('Math.ceil:', Math.ceil(num));   // 6
console.log('Math.round:', Math.round(num)); // 6
console.log('Math.trunc:', Math.trunc(num)); // 5
console.log('Math.sign (num):', Math.sign(num)); // 1
console.log('Math.sign (-num):', Math.sign(-num)); // -1
console.log('Math.sign (0):', Math.sign(0)); // 0
console.log('Math.sign (-0):', Math.sign(-0)); // -0  
console.log('Math.sign (NaN):', Math.sign(NaN)); // NaN
console.log('Math.max (1, 5, 3):', Math.max(1, 5, 3)); // 5
console.log('Math.min (1, 5, 3):', Math.min(1, 5, 3)); // 1
console.log('Math.abs (-10):', Math.abs(-10)); // 10