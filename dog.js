import Animal from "./Animal.js";


// console.log(Animal)
class Dog extends Animal {

    constructor(name, sound, breed) {
        super(name, sound)
        this.name = name;
       this.breed = breed;

    }

    callAnimal() {
        console.log(`the name is ${this.name} `)
        this.animalSound() ;
        this.animaAge();
    }


}

const theway = new Dog("The Way", "Woof", "Labrador");
const res = theway.callAnimal();

console.log(res)