// Functional Programming - Workshop Exercise 2.
//
// Read the whole file!
// Then start at the instructions after the "EXERCISES" header
//
// Run the file with "npx ts-node exercise-2.ts" and read the outputs (console.logs) before you make any changes

type User = {
  name: string, 
  food: number | null
}

type Food = {
  name: string, 
  id: number | null
}

const userData: User[] = [
  {
    name: 'John',
    food: 1
  },
  {
    name: 'Bob',
    food: 2
  },
  {
    name: 'Sarah',
    food: 3
  },
  {
    name: 'Faye',
    food: 4
  },
  {
    name: 'Tim',
    food: null
  }
]

const foodData: Food[] = [
  {
    name: 'Pizza',
    id: 1
  },
  {
    name: 'Indian',
    id: 2
  },
  {
    name: 'Thai',
    id: 3
  },
  {
    name: 'American',
    id: 4
  },
  {
    name: 'English',
    id: null
  }
]

// Part 1: Refactor queryUser and queryFood to 'reject' when missing the required values
// const queryUser = (personName: string): Promise<User> =>
//   new Promise((resolve) => {
//     const result = userData.filter((user) => user.name === personName)[ 0 ] || null
//     resolve(result)
//   })

  const queryUser = (personName: string): Promise<User> =>
  new Promise((resolve,reject) => {

    if(!personName){
      reject("Missing Name.. Please pass Name")
    }
    const result = userData.filter((user) => user.name === personName)[ 0 ] || null

    if(! result.name)
    resolve(result)
    else
    reject( `${personName} is not Present`)
  })

// Part 1: Refactor queryUser and queryFood to 'reject' when missing the required values
const queryFood = (foodId: number | null): Promise<Food> =>
  new Promise((resolve, reject) => {

    if(!foodId)
      reject ("Food id is missing")
    const result = foodData.filter((food) => food.id === foodId)[ 0 ] || null
    if(result.name)
      resolve(result)
    else 
      reject( `${foodId} is not Present`)
  })

// Fetch data
const findFavouriteFood = (name: string) =>
  new Promise((resolve, reject) => {
    queryUser(name)
      .then((person) => queryFood(person.food))
      .then((foodItem) => resolve(`${name} likes ${foodItem.name}`))
      .catch(error => reject(error));
  })

console.log('User data:', userData)
console.log('Food data:', foodData)

console.log('')
console.log('Bad Results:')


// Part 2. Add '.catch' blocks to these function chains to catch the rejected promises
findFavouriteFood('').then(console.log).catch(console.log); // Test rejection for not providing a name
findFavouriteFood('Megan').then(console.log).catch(console.log); // Test rejection for giving a name that doesn't exist
findFavouriteFood('Tim').then(console.log).catch(console.log); // Test rejection for missing food id


// ----- EXERCISES -------------------------------------------------------

// There is now a user with data `{ name: 'Tim', food: null }` and a food with data `{ name: 'English', id: null }`

// Part 1: Refactor queryUser and queryFood to 'reject' when missing the required values
// Part 2. Add '.catch' blocks to these function chains to catch the rejected promises
// For both of these, add console logs so you can check the output
