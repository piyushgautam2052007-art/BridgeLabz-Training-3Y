let bonus = 5000;

function calculateSalary() {
    let salary = 40000;
    salary = salary + bonus;

    console.log("Salary:", salary);
}

function checkBonus() {
    let isPermanent = true;

    console.log("Permanent:", isPermanent);
    console.log("Bonus:", bonus);
}

calculateSalary();
checkBonus();