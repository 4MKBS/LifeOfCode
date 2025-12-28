// Intl.RelativeTimeFormat example

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
const minutesAgo = rtf.format(-5, 'minute');

console.log(minutesAgo); // Output: "5 minutes ago"

// Intl.DateTimeFormat example

const date = new Date('2024-06-15T14:30:00Z');
const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
});

console.log(dateFormatter.format(date)); // Output: "June 15, 2024, 02:30 PM GMT"

// Intl.NumberFormat example

const number = 1234567.89;
const numberFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
});

console.log(numberFormatter.format(number)); // Output: "1.234.567,89 €"

// Intl.ListFormat example

const list = ['Apple', 'Banana', 'Cherry'];
const listFormatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

console.log(listFormatter.format(list)); // Output: "Apple, Banana, and Cherry"

// Intl.Collator example

const strings = ['apple', 'Banana', 'cherry'];
const collator = new Intl.Collator('en', { sensitivity: 'base' });

strings.sort(collator.compare);

console.log(strings); // Output: [ 'apple', 'Banana', 'cherry' ]    

// Intl.PluralRules example

const pluralRules = new Intl.PluralRules('en-US');

console.log(pluralRules.select(1));
console.log(pluralRules.select(5)); // Output: "one"
console.log(pluralRules.select(5)); // Output: "other"  

