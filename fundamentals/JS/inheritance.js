// Prototype inheritance example

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function Student(name, age, studentId) {
  Person.call(this, name, age); // Call the parent constructor
  this.studentId = studentId;
}

// Set up inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function(subject) {
  console.log(`${this.name} is studying ${subject}.`);
};

// Usage
const alice = new Person("Alice", 30);
alice.greet();

const bob = new Student("Bob", 20, "S12345");
bob.greet();
bob.study("Mathematics");

export { Person, Student };