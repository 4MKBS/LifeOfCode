// Object.seal

const obj = { a: 1 };
const sealed = Object.seal(obj);
sealed.a = 2; // ok
// sealed.b = 3; // fails silently or throws in strict mode
