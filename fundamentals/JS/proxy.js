// Proxy basics

const target = { count: 0 };
const handler = {
    get(obj, prop) {
        console.log('get', prop);
        return obj[prop];
    },
    set(obj, prop, value) {
        console.log('set', prop, value);
        obj[prop] = value;
        return true;
    }
};

const proxied = new Proxy(target, handler);
proxied.count;
proxied.count = 2;

console.log('Final count:', target.count);

// Proxy with function
const funcTarget = function(x) {
    return x * 2;
};

const funcHandler = {
    apply(target, thisArg, argumentsList) {
        console.log('Function called with arguments:', argumentsList);
        return target(...argumentsList) + 1; // modify return value
    }
};

const proxiedFunc = new Proxy(funcTarget, funcHandler);
const result = proxiedFunc(5);
console.log('Function result:', result);

