// Custom sort compare

const users = [
    { name: 'Ava', age: 30 },
    { name: 'Ben', age: 20 }
];

users.sort((a, b) => a.age - b.age);

console.log(users); // [{ name: 'Ben', age: 20 }, { name: 'Ava', age: 30 }]

// Sort by name
users.sort((a, b) => a.name.localeCompare(b.name));

console.log(users); // [{ name: 'Ava', age: 30 }, { name: 'Ben', age: 20 }]

// Sort by name length
users.sort((a, b) => a.name.length - b.name.length);

console.log(users); // [{ name: 'Ben', age: 20 }, { name: 'Ava', age: 30 }]