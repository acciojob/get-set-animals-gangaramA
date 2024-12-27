// Define the Animal class
class Animal {
    constructor(species) {
        this.species = species;
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Define the Dog class inheriting from Animal
class Dog extends Animal {
    constructor(breed) {
        super('Dog');
        this.breed = breed;
    }

    bark() {
        console.log('woof');
    }
}

// Define the Cat class inheriting from Animal
class Cat extends Animal {
    constructor(species) {
        super(species);
    }

    purr() {
        console.log('purr');
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
