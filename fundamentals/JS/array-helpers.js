// Array helper patterns

const nums = [1, 2, 3, 4, 5];

const squares = nums.map(n => n * n);
const evens = nums.filter(n => n % 2 === 0);
const total = nums.reduce((sum, n) => sum + n, 0);
const firstBig = nums.find(n => n > 3);

// Immutably insert/remove
const insert = [...nums.slice(0, 2), 99, ...nums.slice(2)];
const withoutFirst = nums.slice(1);


console.log('Squares:', squares); // [1, 4, 9, 16, 25]
console.log('Evens:', evens); // [2, 4]
console.log('Total:', total); // 15
console.log('First > 3:', firstBig); // 4
console.log('Insert 99 at index 2:', insert); // [1, 2, 99, 3, 4, 5]
console.log('Without first element:', withoutFirst); // [2, 3, 4, 5]
