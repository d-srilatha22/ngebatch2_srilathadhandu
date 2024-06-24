/*
Run this with
> npm install
> npm test zoo-animals
*/

import { add } from './maths-utils'
import { addDolphinToPool, petThePenguins } from './zoo-animals'

describe('When adding a dolphin to the pool', () => {

  test('And speed is over 30 we get Speedy Alice', () => {
        let expectedResult={"name":"Speedy Alice","swimSpeedKph":50, "flippers":2, "mammal":true};
        expect(addDolphinToPool(50)).toEqual(expect.objectContaining(expectedResult));
        //console.log(addDolphinToPool(50));

    // Hint: expect.objectContaining on name only
  })

  test('And speed is under 30 we get Slow Bob', () => {
    // Hint: expect.objectContaining on name only
    let expectedResult={"name":"Slow Bob","swimSpeedKph":25, "flippers":2, "mammal":true};
    expect(addDolphinToPool(25)).toEqual(expect.objectContaining(expectedResult));
    //console.log(addDolphinToPool(25));

  })

  test('Speedy Alice is a fast mammal with two flippers', () => {
    let expectedResult={"name":"Speedy Alice","swimSpeedKph":70, "flippers":2, "mammal":true};
    // Hint: toStrictEqual the whole object
    expect(addDolphinToPool(70)).toStrictEqual(expectedResult);
    //console.log(addDolphinToPool(70));
  })

  test('Slow Bob is a slow mammal with two flippers', () => {
    let expectedResult={"name":"Slow Bob","swimSpeedKph":27, "flippers":2, "mammal":true};
    // Hint: toStrictEqual the whole object
    expect(addDolphinToPool(27)).toStrictEqual(expectedResult);
    //console.log(addDolphinToPool(27));
  })
})

describe('When petting the penguins', () => {

  test('One penguin with one fish will be fed', () => {
    const expectedResult=[{"name":"A","hungry":false, "flippers":2, "mammal":false}];
    // Hint: toStrictEqual the whole array
    expect(petThePenguins(1,1)).toStrictEqual(expectedResult);
  })

  test('One penguin with no fish will be hungry', () => {
    const expectedResult=[{"name":"A","hungry":true, "flippers":2, "mammal":false}];
    // Hint: toStrictEqual the whole array
    expect(petThePenguins(1,0)).toStrictEqual(expectedResult);
  })

  describe('And there are not enough fish', () => {
      // Hint: expect.arrayContaining on one penguin
      test('At least one penguin will be hungry', () => {
        const expectedResult=[{"name":"A","hungry":false, "flippers":2, "mammal":false},
        {"name":"B","hungry":true, "flippers":2, "mammal":false}];
      expect(petThePenguins(2,1)).toEqual(expect.arrayContaining(expectedResult));
    })
  })

})