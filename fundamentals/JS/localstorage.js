// LocalStorage Example

// Function to save data to localStorage
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  console.log(`Data saved: ${key} = ${value}`);
}

// Function to retrieve data from localStorage
function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

// Function to remove data from localStorage
function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
  console.log(`Data removed: ${key}`);
}

// Example usage
saveToLocalStorage("username", "john_doe");
const username = getFromLocalStorage("username");
console.log(`Retrieved username: ${username}`);
removeFromLocalStorage("username");
console.log(`Retrieved username: ${username}`); // Output: "Retrieved username: john_doe"

// Output: "one"
console.log(pluralRules.select(5)); // Output: "other"
console.log(pluralRules.select(1)); // Output: "one"

// Output: "other"
console.log(pluralRules.select(5)); // Output: "other"

// Output: "other"
console.log(pluralRules.select(5)); // Output: "other"

// Output: "one"
console.log(pluralRules.select(1)); // Output: "one"

// Output: "other"
console.log(pluralRules.select(5)); // Output: "other"

// Output: "other"
console.log(pluralRules.select(5)); // Output: "other"

// Output: "one"
console.log(pluralRules.select(1)); // Output: "one"

// Output: "other"
console.log(pluralRules.select(5)); // Output: "other"

console.log(
  `Retrieved username after removal: ${getFromLocalStorage("username")}`
); // Output: "Retrieved username after removal: null"

console.log(
  `Retrieved username after removal: ${getFromLocalStorage("username")}`
); // Output: "Retrieved username after removal: null"

console.log(
  `Retrieved username after removal: ${getFromLocalStorage("username")}`
); // Output: "Retrieved username after removal: null"

console.log(
  `Retrieved username after removal: ${getFromLocalStorage("username")}`
); // Output: "Retrieved username after removal: null"

export { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage };
