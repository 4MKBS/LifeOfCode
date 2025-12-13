// Bitwise operations

const masked = 0b1010 & 0b1100; // 0b1000 (8)
const toggled = 0b1010 ^ 0b0011; // 0b1001 (9)
const shifted = 8 >> 1; // 4
const ored = 0b1010 | 0b0101; // 0b1111 (15)
const leftShifted = 3 << 2; // 12
const notted = ~0b1010; // -11

console.log(`Masked: ${masked}`);
console.log(`Toggled: ${toggled}`);
console.log(`Shifted: ${shifted}`);
console.log(`Ored: ${ored}`);
console.log(`Left Shifted: ${leftShifted}`);
console.log(`Notted: ${notted}`);

