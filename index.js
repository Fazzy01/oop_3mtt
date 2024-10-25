
class Person {
    constructor(name, age){
        this.breathe = "yes";
        this.isAlive = true;
        this.name = name;
        this.age = age;

    }

    walk() {
        console.log(`${this.name}  is walking.`);
    }

}

const joy = new Person("Joy", 15);
const akin= new Person("Akin", 8);

console.log(akin)
console.log(akin.walk())