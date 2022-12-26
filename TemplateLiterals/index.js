let word1 = "Nathan"
let word2 = "Lao"
let num1 = 2
let num2 = 3

// const fullName = word1 + " " + word2
// Template literal
const fullName = `${num1 + num2} ${word1} ${word2}`
console.log(fullName)

// Multi line string
let example = `${word1} 
${word2}
`
console.log(example)

let exampleEl = document.getElementById("example")
exampleEl.innerText = example
exampleEl.innerText += fullName