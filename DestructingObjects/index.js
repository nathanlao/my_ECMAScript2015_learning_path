// Object
const personalInfo = {
    firstName: 'Nathan',
    lastName: 'Lao',
    city: 'vancouver',
    state: 'BC',
    postalCode: 'RXX CXX'
}

// Destructing object -> have access to the value in the object
// Idea: Extracting the firstname & lastName property from the personalInfo object
//       and store it in the firstName & lastName Variable
// : -> Reassign the value (make sure the scope of it is short)
const {firstName: fn, lastName: ln} = personalInfo

console.log(`${fn} ${ln}`)