/*
Run with
> npm install
> npm test palindrome
*/
import { palindrome } from './palindrome'

describe('When calling the palindrome function', () => {

  let res:boolean;
  beforeEach(()=>{
    res=palindrome('madam');

  })

  it('will return true for text that is a palindrome', () => {
    expect(res).toBe(true);
    
  })
})

describe('When calling the palindrome function', () => {

    let res:boolean;
    beforeEach(()=>{
      res=palindrome("1234");
  
    })
  
    it('will return false for invalid inputs', () => {
      expect(res).toBe(false);
      
    })

  })


  describe('When calling the palindrome function', () => {

    let res:boolean;
    beforeEach(()=>{
      res=palindrome("BYE");
  
    })
  
    it('will return true or false when called', () => {
      expect(res).toBe(false);
      
    })

  })


