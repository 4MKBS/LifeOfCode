// Promise microtask ordering

console.log('before');
Promise.resolve().then(() => console.log('microtask')); 
console.log('after');
