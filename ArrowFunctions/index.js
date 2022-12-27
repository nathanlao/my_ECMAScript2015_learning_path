// Old way: 
// function add(...nums) {
//     let total = nums.reduce(function (x, y) {
//         return x + y
//     });
//     console.log(total)
// }

// arrow function
function add(...nums) {
    let total = nums.reduce((x, y) => {
        return x + y;
    });
    console.log(total);
}

// cleaner way of arrow function
function add(...nums) {
    let total = nums.reduce((x, y) => x + y);
    console.log(total);
}

add(1, 2, 3, 4, 5);

// Practice
// const square = function(number) {
//     return number * number
// }

// arrow function without parameters
const example = () => {
    return number * number;
}

// arrow function with 1 param
const square = number => number * number;
console.log(square(5));


// Array of jobs
const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: false},
    {id: 3, isActive: true},
];

// const activeJobs = jobs.filter(function(job) {
//     return job.isActive;
// });
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);


