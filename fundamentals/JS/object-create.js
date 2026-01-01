// Object.create for prototyping

const animal = {
    speak() {
        return 'sound';
    }
};

const dog = Object.create(animal);
dog.bark = () => 'woof';
