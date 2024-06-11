// Cursor Park (anyone not typing put your cursor here)
// Rewrite this function in Arrow form:
/* function sayHello(firstName: string, lastName: string) {
  console.log(`sayHello: Hello ${firstName} ${lastName}`)
} */
var sayHello = function (firstName, lastName) { return console.log("sayHello: Hello ".concat(firstName, " ").concat(lastName)); };
sayHello('Neil', 'Jennings');
// TODO make hiEveryone() as arrow function with sayHello functionality
var hiEveryone = function (fname, lname) { return sayHello(fname, lname); };
hiEveryone('Sita', 'Ram');
// Rewrite this function in one-line arrow syntax:
/* function loadsOfMoney(myWages: number) {
  return myWages * 10
} */
var loadsOfMoney = function (myWages) { return myWages * 10; };
// TODO make soMuchMoreMoney() as a one-line arrow expression with loadsOfMoney
var soMuchMoreMoney = function (amount) { return loadsOfMoney(amount); };
var resultSum = soMuchMoreMoney(300);
console.log("Moremoney: ".concat(resultSum));
