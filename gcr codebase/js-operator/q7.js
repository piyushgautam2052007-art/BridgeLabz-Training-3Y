let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.trim().split(" ");
let count = words.length;

if (feedback.includes("bad") || feedback.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}

console.log("Word Count:", count);