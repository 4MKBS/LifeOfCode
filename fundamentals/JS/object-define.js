// Object.defineProperty

const user = {};
Object.defineProperty(user, 'id', {
    value: 1,
    writable: false,
    enumerable: true
});
