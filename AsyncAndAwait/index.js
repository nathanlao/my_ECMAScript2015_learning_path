const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

/* Promise: handle asynchronous operations in JavaScript
* Pros: instead of using nested callback (callback hell -> unmanageble code)
*       better error handling (.catch())
* Takes in onw argument -> a callback function (the callback function takes in 2 arguments -> resolved and rejected)
*
* Has two results: resolved/rejected
*/
let a = new Promise((resolve, reject) => {
    let b = 1 + 1;
    if (b === 2) {
        resolve("Success!");
    } else {
        reject("Failed!")
    }
});

a.then((msg) => {
    console.log("This is in the then " + msg);
}).catch((error) => {
    console.log("This is in the catch " + error);
});

//
function getTop100Campers() {
    // fetch() -> return a promise
    // .then() -> return a promise of type response
    // Idea: we promise to send you some data with fetch()
    //       then ok I will do something when you send me the data
    //       in the meantime, just keep running you code -> sort of 
    //       how asynchronous and promise works
    fetch(apiUrl)
    .then((response) => response.json())
    // anther promise
    .then((json) => {
        console.log(json[0])
    }).catch((error) => { // catch the error result in ajax call in case there is an error
        console.log('Failed') // For any reason, server side fails on the fetch or converitng to 
                                // json, we get the fail
    });
}

// async -> there may be some asynchronous items going on in our function
//          it will give us the access to await keyword
async function getTop100CampersAsync() {
    // asynchronous call ( await -> please wait until the fetch is completed)
    const response = await fetch(apiUrl);
    // another asynchronous call
    const json = await response.json(); // this line will not run until first await get resolved

    // If this is not asnchronuns, console log would not know what json[0] is,
    // because all the code would run synchronoouly just one after another,
    // would not be resolved before we get the data
    console.log(json[0]) 
}

getTop100Campers();
getTop100CampersAsync();

// Challenge
function resolveAfter3Seconds() {
    // create a promise
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 3000);
    });
}

// 1st: call promise method .then()
resolveAfter3Seconds().then((data) => {
    console.log(data);
})

// 2nd: use async and await
async function getAsyncData() {
    const result = await resolveAfter3Seconds();
    console.log(result);
}

getAsyncData();