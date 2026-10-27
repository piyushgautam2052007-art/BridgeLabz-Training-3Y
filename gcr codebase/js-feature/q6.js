"use strict";

const input = 5;
const rows = Number.isInteger(input) && input > 0 ? input : 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern.trim());
}

// Replace let with var and observe variable reuse.
// Set a breakpoint inside the loop to inspect i and j.
