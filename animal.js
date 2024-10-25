
class Animal {

    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    animalSound() {
        console.log(`the animal sound is ${this.sound}`);
        return `the animal sound is ${this.sound}`;
    }

    animaAge(){
        console.log(`the animal age is 23`);
    }


}
export default Animal;