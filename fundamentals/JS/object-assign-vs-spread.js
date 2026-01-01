// Object.assign vs spread

const a = { x: 1 };
const b = { y: 2 };
const assigned = Object.assign({}, a, b);
const spread = { ...a, ...b };
