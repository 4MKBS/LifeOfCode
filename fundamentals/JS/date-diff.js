// Date diff in days

const daysBetween = (a, b) => Math.round((b - a) / (1000 * 60 * 60 * 24));

// Get days between two specific dates
console.log('Days between 2024-01-01 and 2024-01-10:', daysBetween(new Date('2024-01-01'), new Date('2024-01-10')));

// Real-time examples
const today = new Date();
const yesterday = new Date(today.getTime() - 1000 * 60 * 60 * 24);
const nextWeek = new Date(today.getTime() + 7 * 1000 * 60 * 60 * 24);
const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

console.log('Days since yesterday:', daysBetween(yesterday, today));
console.log('Days until next week:', daysBetween(today, nextWeek));
console.log('Days since last month:', daysBetween(lastMonth, today));

// Days until a specific date
const newYear2025 = new Date('2025-01-01');
console.log('Days until 2025:', daysBetween(today, newYear2025));

// Days since birthday example
const birthday = new Date('1990-05-15');
console.log('Days since birthday:', daysBetween(birthday, today));