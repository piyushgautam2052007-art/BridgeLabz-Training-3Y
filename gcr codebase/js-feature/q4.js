"use strict";

function showMessage() {
    const greeting = "Welcome";
    console.log(greeting);
}

showMessage();

// Undeclared variables cause ReferenceError in strict mode.
// Declaring greeting with const fixes the error.
// Set a breakpoint on console.log to inspect greeting and the call stack.
