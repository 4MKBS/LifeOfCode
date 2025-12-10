// Base64 encoding/decoding (browser)

const encoded = btoa('hello');
console.log('Encoded:', encoded); // SGVsbG8=

const decoded = atob(encoded);
console.log('Decoded:', decoded); // hello

// For Node.js, use Buffer instead:
const encoded1 = Buffer.from('sakib').toString('base64');
const decoded1 = Buffer.from(encoded1, 'base64').toString();
console.log('Encoded (Node.js):', encoded1); // U2FraWI=
console.log('Decoded (Node.js):', decoded1); // sakib   