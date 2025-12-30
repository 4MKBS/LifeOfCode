// ES Modules basics
// Use <script type="module"> in HTML or .mjs files in Node.

// Named exports
export const API_URL = 'https://api.example.com';
export function greet(name) {
    return `Hello, ${name}!`;
}
export const version = '1.0.0';

// Default export
const mathTools = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
};
export default mathTools;

// Import examples (reference)
// import mathTools, { API_URL, greet, version as v } from './modules.js';
// import * as utils from './modules.js';
// Dynamic import (code-splitting / on-demand)
// import('./modules.js').then(mod => mod.greet('dynamic'));

// Usage examples
console.log(greet('World')); // Hello, World!
console.log(`API URL: ${API_URL}`);
console.log(`Version: ${version}`);
console.log(`2 + 3 = ${mathTools.add(2, 3)}`);
console.log(`4 * 5 = ${mathTools.multiply(4, 5)}`);

