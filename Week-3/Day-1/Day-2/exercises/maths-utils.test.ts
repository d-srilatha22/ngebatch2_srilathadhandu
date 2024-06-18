/*
Run this with
> npm install
> npm test maths-utils
*/

import { add, safeMultiply } from './maths-utils'

describe('When calling the Add function', () => {
  it('should add two integers', () => {
    expect(add(10,20)).toBe(30)
  })

  it('will add strings and numbers', () => {
    expect(add('apple',1)).toBe('apple1');
  })
})

describe('When calling the safeMultiply function', () => {

  it('should multiply two integers', () => {
    expect(safeMultiply(2,30)).toEqual(60);
  })

  it('will throw an error when parameter a is bad', () => {
    // Arrange: Setup variables here

    // Act: Call function here + Assert: Check results here
    // Hint: add a wrapper function
        
    // Assert
    // Hint: use "toThrow()"
    const someCall= ()=> safeMultiply('apple',10);
    expect(someCall).toThrow(new Error(`Parameters a and b must be numeric but got a='apple' and b='10'`));
  })
    
  it('will throw an error when parameter b is bad', () => {
    // Arrange: Setup variables here
        
    // Act: Call function here
        
    // Assert: Check results here
    // You can either do this with a wrapper function and .toThrow, or you can try using a try/catch block
      try{
        safeMultiply(4,'bat');
      }
      catch(a:any){
        expect(a.message).toBe(`Parameters a and b must be numeric but got a='4' and b='bat'`);
      }

  })
})
