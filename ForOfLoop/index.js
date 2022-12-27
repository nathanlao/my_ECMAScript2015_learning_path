let numbers = [100, 200, 300] // iterables
let total = 0

// For of loop
for (const num of numbers) {
    total += num
}

console.log(total)

// Call it iterables
let fullName = "Nathan"
// because we can iterate the strings as well
for (const char of fullName) {
    console.log(char)
}

// Chal
for (let num of numbers) {
    // This is not gonna affect the iterables
    // beacuse forOf loop is designed to iterate over the iterables 
    // not use to set up new values of iterable objects
    num += 1
}
console.log(numbers)