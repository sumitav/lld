// Define the Employee class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    accept(visitor) {
        visitor.visit(this);
    }
}

// Define the SalaryVisitor class
class SalaryVisitor {
    visit(employee) {
        // Calculate the salary based on some logic
        let salary = employee.salary * 1.1; // Increase the salary by 10%
        console.log(`${employee.name}'s salary is ${salary}`);
    }
}

// Usage example
const john = new Employee("John Doe", 5000);
const jane = new Employee("Jane Smith", 6000);

const salaryVisitor = new SalaryVisitor();

john.accept(salaryVisitor);
jane.accept(salaryVisitor);