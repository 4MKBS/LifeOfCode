// Strict mode basics

'use strict';

// Prevents accidental globals
function strictExample() {
    // undeclaredVar = 5; // ReferenceError in strict mode
    return 'safe';
}

// this is undefined in functions (not bound via object)
function showThis() {
    return this; // undefined in strict mode
}
