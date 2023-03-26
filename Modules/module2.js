//Importing the module1 which is expprted as a object
// Importing the modules which is exported as the new properties of teh module.exports object
// SAME IMPORT METHODS FOR BOTH

// Require take the relative path of the module
// const module1 = require('./module1');

// let add = module1.add;
// let subtract = module1.subtract;
// let operations = module1.operations;



// Using destructing to import the object
// const {add , subtract , operations} = require('./module1')

// console.log("Add : " , add(1 , 2));
// console.log("Subtract : " , subtract(1 , 2));
// console.log("Operations : " , operations);

// Importing exactly 1 module
const add = require('./module1');


console.log("Add : " , add(5 , 4));
