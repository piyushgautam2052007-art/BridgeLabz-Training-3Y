"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const valid = [];
const invalid = [];

for (const value of apiData) {
    const number = Number(value);

    console.log("Value:", value);
    console.log("Number:", number);
    console.log("Boolean:", Boolean(value));
    console.log("String:", String(value));

    if (value === null || value === undefined ||
        (typeof value === "string" && value.trim() === "") ||
        !Number.isFinite(number)) {
        invalid.push(value);
    } else {
        valid.push(number);
    }
}

console.log("Valid numbers:", valid);
console.log("Invalid values:", invalid);
