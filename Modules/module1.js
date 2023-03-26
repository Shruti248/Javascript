// Loacal Module :

// Export using module.exports object or the exports variable which is equal to the module.exports object in node

// We will export this mdule1 & import in module2 for use

let operations = ['+' , '-' , '*' , '/'];

let add = (num1 , num2) => {
    return num1+num2;
}

let subtract = (num1 , num2) => num1-num2;
let multiply = (num1 , num2) => num1*num2;
let divide = (num1 , num2) => num1/num2;


// Export as a object
// module.exports = {add : add , subtract : subtract , operations : operations}

// Shorthand for above only if names are same
// module.exports = {
//     add , subtract , operations
// }

// Export as additional properties for teh already existinng object of the module.exports
// SO NO new Object is created
// Properties are added to the module.exports object
// module.exports.add = add;
// module.exports.subtract = subtract;
// module.exports.operations = operations;

// Exporting exactly 1 module
module.exports = add;
