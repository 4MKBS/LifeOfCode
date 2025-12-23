// Hoisting basics

console.log(hoisted());
function hoisted() {
    return 'function declarations hoist';
}

console.log(a); // undefined due to var hoisting
var a = 2;

// let/const are hoisted but in TDZ (accessing before init throws)
// console.log(b); // ReferenceError
let b = 3;
