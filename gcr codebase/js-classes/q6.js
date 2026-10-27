// Q6. Employee Class

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

let employees = [
    new Employee(1, "Amit", "IT", 30000),
    new Employee(2, "Ravi", "HR", 25000),
    new Employee(3, "Neha", "IT", 40000),
    new Employee(4, "Priya", "Sales", 35000),
    new Employee(5, "Rahul", "HR", 20000)
];

employees[0].applyBonus(10);

employees.forEach(e => {
    console.log(e.name, e.getAnnualSalary());
});

let total = employees.reduce(
    (sum, e) => sum + e.getAnnualSalary(), 0
);

console.log("Total annual salary:", total);
