export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    // functions in classes (No function keyword)
    makeNoise(sound = "Loud Noise") {
        console.log(sound);
    }

    // Getters
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

    static return10() {
        return 10;
    }
}

// Inheritance
export class Cat extends Animal {
    // same param: type and legs, can add more params
    constructor(type, legs, tail) {
        // super -> call the parent;s constructor method and gets access to the parent;s porperties
        super(type, legs);
        this.tail = tail;
    }

    // overwrite the method
    makeNoise(sound = "meow") {
        console.log(sound);
    }
}