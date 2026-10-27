"use strict";

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

const announceArrow = () => {
    console.log("Game started using arrow function");
};

announceArrow();

// var is hoisted and initialized with undefined.
// Function declarations are hoisted.
// let and const cannot be accessed before initialization.
// Arrow functions must be initialized before being called.
