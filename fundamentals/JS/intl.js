// Intl utilities for dates and numbers

const amount = 1234.56;
const formattedCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(amount);

const date = new Date("2025-12-06T12:34:56Z");
const formattedDate = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "long",
  timeStyle: "short",
}).format(date);

// Locale-aware string comparison
const collator = new Intl.Collator("sv");
collator.compare("å", "z");

console.log(`Formatted Currency: ${formattedCurrency}`);
console.log(`Formatted Date: ${formattedDate}`);
console.log(`String comparison (å vs z): ${collator.compare("å", "z")}`);

export { formattedCurrency, formattedDate, collator };
