Array.prototype.myMap = function(callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

let numbers = [1, 2, 3];

let answer = numbers.myMap(num => num * 2);

console.log(answer);
