function add(numArray = []) {
    let total = 0;
    // forEach -> calls a function for each element in an array
    numArray.forEach(element => {
        total += element;
    });
    // 
    // numArray.forEach(function(element) {
    //      total += element
    // })
    console.log(total);
}

add();