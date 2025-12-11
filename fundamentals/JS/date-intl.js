// Date formatting with Intl

const date = new Date('2025-12-06T00:00:00Z');
const fmt = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' });
fmt.format(date);


console.log('Formatted date:', fmt.format(date));

// Different locales
const locales = ['en-US', 'fr-FR', 'ja-JP', 'de-DE', 'zh-CN'];
locales.forEach(locale => {
    const formatter = new Intl.DateTimeFormat(locale, { dateStyle: 'full', timeStyle: 'short' });
    console.log(`Formatted date in ${locale}:`, formatter.format(date));
});
// Custom options
const customFmt = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
});
console.log('Custom formatted date:', customFmt.format(date));
// Time zone example
const tzFmt = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/New_York'
});
console.log('Formatted date in New York timezone:', tzFmt.format(date));
// Relative time formatting
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
console.log('3 days ago:', rtf.format(-3, 'day'));
console.log('In 5 months:', rtf.format(5, 'month'));
console.log('2 years ago:', rtf.format(-2, 'year'));
console.log('In 10 minutes:', rtf.format(10, 'minute'));
// List of all options
const allOptions = {
    weekday: ['narrow', 'short', 'long'],
    era: ['narrow', 'short', 'long'],
    year: ['2-digit', 'numeric'],
    month: ['2-digit', 'numeric', 'narrow', 'short', 'long'],
    day: ['2-digit', 'numeric'],
    hour: ['2-digit', 'numeric'],
    minute: ['2-digit', 'numeric'],
    second: ['2-digit', 'numeric'],
    timeZoneName: ['short', 'long']
};

console.log('All Intl.DateTimeFormat options:', allOptions);    