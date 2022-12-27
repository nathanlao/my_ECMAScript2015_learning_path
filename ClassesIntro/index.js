import { Animal, Cat } from "./animal.js";

// Class instantiate
let cat = new Animal('cat', '4');
cat.legs = 4;

cat.makeNoise();
cat.makeNoise("Meow");
console.log(cat.type)
console.log(cat.legs)

// Use getter method
console.log(cat.metaData);


// static function -> no need to instantiate the class Animal
console.log(Animal.return10())

// -> log out meow (because we've overwritten makeNoise() in child class)
let cat2 = new Cat('Cat', 4)
cat2.makeNoise();

console.log(cat2.metaData)