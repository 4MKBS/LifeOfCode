const d = new Date();
console.log(d); // Current date and time

const specificDate = new Date('2023-01-01T12:00:00Z');
console.log(specificDate); // January 1, 2023, 12:00:00 PM UTC

const timestampDate = new Date(1672531200000);
console.log(timestampDate); // January 1, 2023, 12:00:00 AM UTC

const year = d.getFullYear();
const month = d.getMonth() + 1;
const day = d.getDate();
console.log(`Today's date is: ${year}-${month}-${day}`);

d.setFullYear(2025);
console.log(d); // Date with year changed to 2025

const isoString = d.toISOString();
console.log(isoString); // ISO string representation of the date

const localeString = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
console.log(localeString); // Date and time in New York timezone

const utcString = d.toUTCString();
console.log(utcString); // Date and time in UTC format

const timeDiff = specificDate - d;
console.log(`Time difference in milliseconds: ${timeDiff}`); // Time difference in milliseconds

const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
console.log(`Time difference in days: ${daysDiff}`); // Time difference in days

const isValidDate = !isNaN(d.getTime());
console.log(`Is the date valid? ${isValidDate}`); // Check if the date is valid

const dateArray = [d.getFullYear(), d.getMonth() + 1, d.getDate()];
console.log(`Date as array: ${dateArray}`); // Date as an array [year, month, day]
