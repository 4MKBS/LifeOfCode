// Date with timezone offset

const now = new Date();
const offsetMinutes = now.getTimezoneOffset();

console.log('Current date and time:', now.toString());
console.log('Timezone offset (in minutes):', offsetMinutes);

const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
const offsetMins = Math.abs(offsetMinutes) % 60;
const offsetSign = offsetMinutes > 0 ? '-' : '+';
const formattedOffset = `UTC${offsetSign}${String(offsetHours).padStart(2, '0')}:${String(offsetMins).padStart(2, '0')}`;

console.log('Formatted timezone offset:', formattedOffset);

// Create a date in a specific timezone (example: UTC)
const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
console.log('Current date and time in UTC:', utcDate.toString());

// Convert date to another timezone (example: America/New_York)
const nyDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
console.log('Current date and time in New York:', nyDate.toString());

// Display date in different timezones using Intl.DateTimeFormat
const timeZones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney'];
timeZones.forEach(tz => {
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        dateStyle: 'full',
        timeStyle: 'long'
    });
    console.log(`Current date and time in ${tz}:`, formatter.format(now));
});


