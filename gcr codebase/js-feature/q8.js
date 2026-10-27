"use strict";

// Strict mode does not allow duplicate parameter names.
// It does not allow undeclared variable assignments.
// Variables cannot be deleted using delete.

// Incorrect examples:
// function demo(a, a) {}
// total = 10;
// delete total;

function demo(a, b) {
    const total = a + b;
    console.log("Total:", total);
}

demo(5, 10);

// The correct version uses unique parameters
// and properly declared variables.
