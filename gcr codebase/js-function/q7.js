function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

let triple = makeMultiplier(3);
let double = makeMultiplier(2);

console.log(triple(5));
console.log(double(5));
