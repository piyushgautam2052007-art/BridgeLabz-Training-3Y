let marks = [45, 80, 65, 90, 35, 70, 55, 85];

let highest = Math.max(...marks);
let lowest = Math.min(...marks);

let total = 0;

for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
}

let average = total / marks.length;

let passed = 0;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
        passed++;
    }
}

console.log("Marks:", marks);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average);
console.log("Passed Students:", passed);