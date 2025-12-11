// Date.now

const now = Date.now();

console.log('Current timestamp (milliseconds since Jan 1, 1970):', now);

// Create a Date object from the timestamp
const currentDate = new Date(now);
console.log('Current date from timestamp:', currentDate.toString());
