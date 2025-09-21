// ==========================================
// JavaScript Functions - Comprehensive Guide
// ==========================================

// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('World')); // Hello, World!

// 2. Function Expression
const sayHello = function(name) {
    return `Hello, ${name}!`;
};
console.log(sayHello('JavaScript')); // Hello, JavaScript!

// 3. Arrow Functions
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// 4. Default Parameters
function greetWithDefault(name = 'Guest') {
    return `Hello, ${name}!`;
}
console.log(greetWithDefault()); // Hello, Guest!

// 5. Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// 6. Closures
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// 7. IIFE (Immediately Invoked Function Expression)
(function() {
    const message = 'I run immediately!';
    console.log(message);
})(); // I run immediately!

// 8. Higher-Order Functions
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // 10

// 9. Function Methods: call, apply, bind
const person = {
    name: 'John',
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

const anotherPerson = { name: 'Jane' };
console.log(person.greet.call(anotherPerson)); // Hello, I'm Jane

// 10. Generator Functions
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const ids = idGenerator();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2

// 11. Async Functions
async function fetchData() {
    try {
        // Simulating fetch with a promise
        const data = await new Promise(resolve => 
            setTimeout(() => resolve('Data received!'), 1000)
        );
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the async function
fetchData().then(result => console.log(result)); // After 1s: Data received!

// 12. Function Recursion
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120