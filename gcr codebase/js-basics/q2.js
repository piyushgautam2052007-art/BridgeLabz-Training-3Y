const userName = "Piyush";
const age = 19;
const isStudent = true;
const skills = ["Java", "JavaScript"];
const user = {
    city: "Aligarh",
    course: "Computer Science"
};
const middleName = null;
let address;

const report = [
    { label: "userName", value: userName, type: typeof userName },
    { label: "age", value: age, type: typeof age },
    { label: "isStudent", value: isStudent, type: typeof isStudent },
    { label: "skills", value: skills.join(", "), type: Array.isArray(skills) ? "array" : typeof skills },
    { label: "user", value: JSON.stringify(user), type: typeof user },
    { label: "middleName", value: middleName, type: "null" },
    { label: "address", value: address, type: typeof address }
];

console.table(report);