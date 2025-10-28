function name(){
    console.log("Hello, World!");
}

name();

const greet = function(){
    console.log("Hello from a function expression!");
}

greet();

const arrow = () => {
    console.log("Hello from an arrow function!");
}

arrow();

// iife - Immediately Invoked Function Expression
(function(){
    console.log("Hello from an IIFE!");
})();
