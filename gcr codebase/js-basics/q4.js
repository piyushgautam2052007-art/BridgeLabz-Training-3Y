const marks = [88, 91, 79, 85, 90];

let totalMarks = 0;

for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
}

const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

console.log(`Total Marks: ${totalMarks}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

if (marks.some(mark => mark < 35)) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}