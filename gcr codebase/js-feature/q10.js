"use strict";

function outer() {
    console.log("Outer count:", count);

    var count = 5;

    const inner = () => {
        console.log("Inner count:", count);

        var innerCount = 10;

        console.log("Inner local count:", innerCount);
    };

    inner();
}

outer();

// Outer count is initially undefined because var is hoisted.
// The arrow function accesses the outer count through lexical scope.
// Use breakpoints to observe variables and the call stack.
