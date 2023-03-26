//Importing the module1 which is expprted as a object

// Require take the relative path of the module
const module1 = require('./module1');

let add = module1.add;
let subtract = module1.subtract;
let operations = module1.operations;

// Using destructing to import the object
// const {add , subtract , operations} = require('./module1')

console.log("Add : " , add(1 , 2));
console.log("Subtract : " , subtract(1 , 2));
console.log("Operations : " , operations);
