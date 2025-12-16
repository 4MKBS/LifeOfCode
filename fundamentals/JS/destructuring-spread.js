// Destructuring, rest, and spread

const user = { id: 1, name: 'Ava', role: 'admin' };
const { name, role, id: userId } = user;

const arr = [10, 20, 30, 40];
const [first, second, ...rest] = arr;

// Spread for cloning/merging
const clone = { ...user, active: true };
const merged = [...arr, 50, 60];



console.log(`Name: ${name}, Role: ${role}, UserID: ${userId}`);
console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);
console.log('Cloned User:', clone);
console.log('Merged Array:', merged);

