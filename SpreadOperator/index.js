let example1 = [1, 2 ,3];
// Spread operator
// unwrapping all the values of example1 into example2
// Not passing it by reference, it instantiating an new array
let example2 = [...example1, 'a'];
example2.push(true);

console.log(example2);