// Define the Animal class
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    sound() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Define the Dog class inheriting from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Dog');
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name}, the ${this.breed}, barks loudly!`);
    }
}

// Define the Cat class inheriting from Animal
class Cat extends Animal {
    constructor(name, color) {
        super(name, 'Cat');
        this.color = color;
    }

    meow() {
        console.log(`${this.name}, the ${this.color} cat, meows softly.`);
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
