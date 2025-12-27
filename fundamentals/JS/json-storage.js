// JSON + storage quick reference

// Storing an object
const user = { name: "Alice", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieving an object
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log("Retrieved user:", storedUser);

// Storing an array
const scores = [10, 20, 30];
localStorage.setItem("scores", JSON.stringify(scores));

// Retrieving an array
const storedScores = JSON.parse(localStorage.getItem("scores"));
console.log("Retrieved scores:", storedScores);

export { user, storedUser, scores, storedScores };
