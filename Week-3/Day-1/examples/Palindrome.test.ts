/*
Run with
> npm install
> npm test palindrome
*/
import { palindrome } from './palindrome'

describe('When calling the palindrome function', () => {


  it('will return true or false when called', () => {
    
    let res:boolean;
    beforeAll(()=> 
    res=palindrome('madam'));
    expect(res).toBe(true);
  })

  it('will return false for invalid inputs', () => {
    //Arrange

    //Act

    //Assert

  })

  it('will return true for text that is a palindrome', () => {
    //Arrange

    //Act

    //Assert

  })
})