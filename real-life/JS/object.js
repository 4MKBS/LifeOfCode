/**
 * JavaScript Objects - A Comprehensive Guide
 */

// 1. Creating Objects
// Object literal - most common way to create objects
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    // Method in an object
    greet: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    }
};

console.log(person.greet()); // Hello, my name is John Doe

// 2. Accessing Properties
console.log(person.firstName); // Dot notation
console.log(person['lastName']); // Bracket notation

// 3. Adding and modifying properties
person.email = 'john@example.com'; // Add new property
person.age = 31; // Modify existing property
delete person.age; // Delete a property

// 4. Object methods
const calculator = {
    add(a, b) { return a + b; },
    subtract(a, b) { return a - b; },
    multiply(a, b) { return a * b; },
    divide(a, b) { return a / b; }
};

console.log(calculator.add(5, 3)); // 8

// 5. Object destructuring
const { firstName, lastName } = person;
console.log(firstName); // John

// 6. Spread operator with objects
const employee = {
    ...person,
    jobTitle: 'Developer',
    company: 'Tech Corp'
};

// 7. Object methods
console.log(Object.keys(person)); // Get all keys
console.log(Object.values(person)); // Get all values
console.log(Object.entries(person)); // Get key-value pairs

// 8. Object immutability
const frozenObj = Object.freeze({ name: 'Cannot change' });
// frozenObj.name = 'Try to change'; // Won't work

// 9. Constructor functions
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getDescription = function() {
        return `${this.year} ${this.make} ${this.model}`;
    };
}

const myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.getDescription()); // 2020 Toyota Corolla

// 10. Classes (syntactic sugar over prototypes)
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks`;
    }
}

const dog = new Dog('Rex');
console.log(dog.speak()); // Rex barks

// 11. Optional chaining and nullish coalescing
const user = { 
    profile: { 
        // address is undefined
    } 
};
console.log(user.profile?.address?.street); // undefined instead of error
console.log(user.profile?.settings?.theme ?? 'dark'); // 'dark' as fallback