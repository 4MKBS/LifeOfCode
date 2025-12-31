// null vs undefined

let notSet; // undefined
const empty = null; // intentionally empty

function maybeReturn(flag) {
  if (flag) return "value";
  // returns undefined implicitly otherwise
}

const result = maybeReturn(false) ?? "fallback";

console.log(notSet); // undefined
console.log(empty); // null
console.log(result); // "fallback"
console.log(typeof notSet); // "undefined"
console.log(typeof empty); // "object"
console.log(notSet == empty); // true
console.log(notSet === empty); // false
console.log(maybeReturn(true)); // "value"
console.log(maybeReturn(false)); // undefined
console.log(maybeReturn(false) ?? "default"); // "default"
console.log(maybeReturn(false) || "default"); // "default"
console.log(maybeReturn(true) ?? "default"); // "value"
console.log(maybeReturn(true) || "default"); // "value"
console.log(null ?? "default"); // "default"
console.log(undefined ?? "default"); // "default"
console.log(null || "default"); // "default"
console.log(undefined || "default"); // "default"
console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null
console.log(null || undefined);
console.log(undefined || null); // null
console.log(0 ?? "default"); // 0
console.log("" ?? "default"); // ''
console.log(false ?? "default"); // false
console.log(0 || "default"); // "default"
console.log("" || "default"); // "default"
console.log(false || "default"); // "default"
console.log(undefined ?? 42); // 42
console.log(null ?? 42); // 42
console.log(undefined || 42); // 42
console.log(null || 42); // 42
console.log(42 ?? null); // 42
console.log(42 ?? undefined); // 42
console.log(42 || null); // 42
console.log(42 || undefined); // 42
