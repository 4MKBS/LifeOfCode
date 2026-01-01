// Looping objects

const obj = { a: 1, b: 2 };
for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
        console.log(key, obj[key]);
    }
}
