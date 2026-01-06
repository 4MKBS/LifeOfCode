// Reflect API basics

const obj = { x: 1 };
Reflect.set(obj, 'y', 2);
Reflect.get(obj, 'x');
console.log(obj); // { x: 1, y: 2 }

const arr = [10, 20, 30];
const length = Reflect.get(arr, 'length');
console.log(length); // 3

Reflect.set(arr, '0', 100);
console.log(arr); // [100, 20, 30]

const hasProp = Reflect.has(obj, 'y');
console.log(hasProp); // true

Reflect.deleteProperty(obj, 'x');
console.log(obj); // { y: 2 }

// Reflect.apply example
function sum(a, b) {
    return a + b;
}

const result = Reflect.apply(sum, null, [5, 10]);
console.log(result); // 15
