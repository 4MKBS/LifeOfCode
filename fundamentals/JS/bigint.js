// BigInt basics - Real-life example: Financial transactions

// Banks need to handle very large numbers with precision
const accountBalance = 9007199254740991n; // cents (90 trillion dollars)
const transactionAmount = 500000000000n; // cents (5 billion dollars)

// Safe arithmetic with BigInt
const newBalance = accountBalance + transactionAmount;
console.log(`New balance: ${newBalance}n cents`);

// Converting to readable format
const balanceInDollars = newBalance / 100n;
console.log(`Balance: $${balanceInDollars}`);

// Comparing large numbers safely
if (newBalance > 10000000000000000n) {
    console.log("Account exceeded threshold");
}
