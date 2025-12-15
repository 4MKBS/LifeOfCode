// Classes and prototypes

class Person {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} says hi`;
    }
    get initial() {
        return this.name[0];
    }
    static createAnonymous() {
        return new Person('Anonymous');
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }
    speak() {
        return `${super.speak()} and studies ${this.course}`;
    }
}

const s = new Student('Kai', 'JS');
s.speak();
Person.createAnonymous();

// Prototype chain basics
function Legacy(name) {
    this.name = name;
}
Legacy.prototype.describe = function() {
    return `Legacy ${this.name}`;
};
const legacy = new Legacy('Obj');
legacy.describe();
