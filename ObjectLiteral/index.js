function addressMaker(city, state) {
    // Old way: 
    // const newAddress = {
    //     newCity: city,
    //     newState: state
    // }

    // Object Literal allows you not to write duplicate code
    // If keys are the same as the parameters, we dont need to set it
    const newAddress = {
        city,
        state
    }
    console.log(newAddress)
}

addressMaker("Burnaby", "BC")

// Practice
function addressChal(address) {
    // Destructure the address object
    const { city, state } = address
    const newAddress = {
        // Object literal
        // for the city key, assign the city value
        city,
        state,
        country: 'Canada'
    }
    // Template literal
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressChal({city: 'Burnaby', state: 'BC'})