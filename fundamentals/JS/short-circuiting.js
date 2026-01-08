// Short-circuiting with && and ||

const maybeUser = null;
const name = maybeUser && maybeUser.name; // null, stops early
const fallbackName = maybeUser || 'Guest'; // returns fallback

// Combine with optional chaining
const email = maybeUser?.contact?.email || 'none';
console.log({ name, fallbackName, email });
