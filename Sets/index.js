// create a unique list/set (iterable -> we can use forEach(), for of)
const exampleSet = new Set([1, 2, 1, 2]); // size -> 2
exampleSet.add(5); // size -> 3
exampleSet.add(5); // size -> 3
exampleSet.add(12); // size -> 4

// delete -> return boolean to indicate whether element is inside the set
console.log(exampleSet.delete(5));

// has -> Does the set has the element?
console.log(exampleSet.has(15)); //false

// Reset the set
exampleSet.clear();

console.log(exampleSet.size)