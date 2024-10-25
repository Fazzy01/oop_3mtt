
class Department {

    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
 }

class University {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    addDepartment(department) {
        this.departments.push(department);
    }

    printDepartments() {
        console.log(`Departments in ${this.name}:`);
        this.departments.forEach((department) => department.printName());
    }

}

const unilorin = new University("Unilorin");
unilorin.addDepartment(new Department("Computer Science"));
unilorin.addDepartment(new Department("HR"));
unilorin.addDepartment(new Department("Biochemistry"));
unilorin.printDepartments()
// console.log(unilorin);


// const person = new Person(new Dog)