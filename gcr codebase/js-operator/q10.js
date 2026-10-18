let departments = ["HR", "Finance", "Tech", "Support"];
let scores = [72, 88, 95, 63];

for (let i = 0; i < departments.length; i++) {
    if (scores[i] >= 90) {
        console.log(departments[i], "Excellent");
    } else if (scores[i] >= 75) {
        console.log(departments[i], "Good");
    } else if (scores[i] >= 60) {
        console.log(departments[i], "Average");
    } else {
        console.log(departments[i], "Needs Improvement");
    }
}