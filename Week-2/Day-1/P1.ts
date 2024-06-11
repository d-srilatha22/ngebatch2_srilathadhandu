const initialState = { name: "John", age: 30 } 

// Pure function 
const updateAge = (state:any, newAge:number) => { 
    // Create a COPY of the current state 
    const stateCopy = { ...state } 
    // Mutate the copy not the original 
    stateCopy.age = newAge 
    // Return new state 
    return stateCopy 
}

let res=updateAge(initialState,55);
console.log('Result:',res)

console.log('Result:',initialState);


