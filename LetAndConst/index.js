// var -> scoped to function
// let -> scoped to block ( use let only when u need to reassign variable)
// const -> scoped to block


// var -> declare with var: that variable is accessible inside of the function in which its defined
// variable hoisting when use var keyword -> hoist to function scope level
function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log(i)
}

sayHello()

// let -> variable is only accessible inside the block
function sayHi() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
    // console.log(i) -> cause error
}

sayHi()
