//import the logic file
import { add } from './add';
describe("To test the add module", ()=>{
    let result:number;
    // Arrange 
    console.log("To setup the data");
    //Act
    console.log("To call the function");
    beforeEach(() =>{
        result = add(34,45);
    })
    it("add two numbers" , ()=>{
        //Follow 3A'
        //Assert
        console.log("To compare the results");
        expect(result).toBe(79);

    })
    
})

describe("To test the add module with one pos and one neg", ()=>{
    let result:number;
    // Arrange 
    console.log("To setup the data");
    //Act
    console.log("To call the function");
    beforeEach(() =>{
        result = add(34,-4);
    })
    it("add two numbers" , ()=>{
        //Follow 3A'
        //Assert
        console.log("To compare the results");
        expect(result).toBe(30);

    })

})