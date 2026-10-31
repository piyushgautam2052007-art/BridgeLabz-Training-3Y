function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name:", this.name);
};

function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showSubject = function() {
    console.log("Subject:", this.subject);
};

function Professor(name, subject, salary) {
    Faculty.call(this, name, subject);
    this.salary = salary;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSalary = function() {
    console.log("Salary:", this.salary);
};

let professor = new Professor("Amit", "Java", 50000);

professor.showName();
professor.showSubject();
professor.showSalary();
