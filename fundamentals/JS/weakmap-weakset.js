// WeakMap and WeakSet basics

const objKey = {};
const weakMap = new WeakMap();
weakMap.set(objKey, 'value');

const weakSet = new WeakSet();
weakSet.add(objKey);

console.log(weakMap.get(objKey)); // 'value'
console.log(weakSet.has(objKey)); // true
