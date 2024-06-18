import { addToArray } from './animal-arr'
/*
Run with
> npm install
> npm test animal-array
*/

//Tasks
// - Make every test in the first describe have the item 'Early Bird' at the start of the array
// - Make sure the array is empty after each test

//This is a test that shows you how the function works and can be tested


let animalArray: string[] = [];
beforeEach(()=>{
  addToArray(animalArray,'Early Bird');
})

afterEach(()=>{
  animalArray = [];
})

console.log(addToArray([],'Timely Hippo'));
describe('To add items', ()=>{
it('I can add an item to an existing array', () => {
  //ARRANGE
  //const animalArray: string[] = []
  const itemToAdd = 'Timely Hippo'
  const expectedResult = ['Early Bird','Timely Hippo']

  //ACT
  const result = addToArray(animalArray, itemToAdd)

  //ASSERT
  expect(result).toEqual(expectedResult)
})
it('Adds Timely Hippo and Regular Rat to an existing array that has Early Bird in it', () => {
  const expectedResult = ['Early Bird','Timely Hippo','Regular Rat']
    const res=addToArray(animalArray, 'Timely Hippo');
    const res1=addToArray(res,'Regular Rat')
    expect(res1).toEqual(expectedResult);
 })
})

