// Scope and closures

let globalValue = 'global';

function functionScopeExample() {
    const inside = 'function scope';
    console.log(globalValue, inside);
}

function blockScopeExample(condition) {
    if (condition) {
        let blockOnly = 'block scope';
        console.log(blockOnly);
    }
    // blockOnly is not accessible here
}

// Closure: inner function remembers outer variables
function makeCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counterA = makeCounter();
counterA(); // 1
counterA(); // 2

// Shadowing and lexical scope
const label = 'outer';
function showLabel() {
    const label = 'inner';
    return label; // picks nearest definition
}
