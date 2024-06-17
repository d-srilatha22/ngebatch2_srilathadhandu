"use strict";
// InfiniPizza!
Object.defineProperty(exports, "__esModule", { value: true });
// Sample of having resolve and reject
// Create a function to use later
var myLoggerCallback = function (data) { return console.log('I was called back with:', data); };
var myErrorCallback = function (data) { return console.log('OOPS:', data); };
// Toggle this value to pretend the db call has succeeded or failed
var bakeAPizza = function () { return false; };
var orderFoodPromise = function () {
    return new Promise(function (resolve, reject) {
        // Do some task 
        var longTaskOk = bakeAPizza();
        // which eventually calls either:
        if (longTaskOk) {
            // Call this if we are happy
            resolve('Done! Yummy!');
        }
        else {
            // Or, if something goes wrong:
            reject('Oops, burnt it');
        }
    });
};
console.log('Start now...');
// See what happens here when the above call fails (rejects)
orderFoodPromise()
    .then(myLoggerCallback)
    .catch(myErrorCallback);
console.log('...Done');
