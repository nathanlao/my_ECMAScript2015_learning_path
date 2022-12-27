let example = "Nathan";

// pad char to start of the string, size 10 in total 
console.log(example.padStart(10, 'a'));

// add char to end
console.log(example.padEnd(20, 'ab'));

// Practice
let url = 'YouTube.com';
console.log(url.padStart(100).length);
console.log(url.padEnd(1));