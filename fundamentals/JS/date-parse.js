// Date parsing

const parsed = new Date('2025-12-06');

console.log('Parsed date:', parsed.toString());

const invalidDate = new Date('invalid-date-string');

console.log('Invalid date:', invalidDate.toString());

const isoString = '2024-06-15T12:30:00Z';
const parsedISO = new Date(isoString);

console.log('Parsed ISO date:', parsedISO.toString());

const timestamp = 1712304000000; // Corresponds to 2024-06-15T00:00:00.000Z
const parsedTimestamp = new Date(timestamp);

console.log('Parsed timestamp date:', parsedTimestamp.toString());

const dateParts = [2024, 5, 15, 10, 30, 0]; // Note: Month is 0-indexed (5 = June)
const parsedParts = new Date(...dateParts);

console.log('Parsed date from parts:', parsedParts.toString());

const utcDate = new Date(Date.UTC(2024, 5, 15, 10, 30, 0));

console.log('Parsed UTC date:', utcDate.toString());