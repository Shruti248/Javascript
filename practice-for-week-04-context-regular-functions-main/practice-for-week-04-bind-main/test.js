// Your code here
const {Employee} = require('./employee')

const obj = new Employee('John Wich' , 'Dog Lover');

console.log(obj);
let fun = obj.sayName;
const bindingTheObj = fun.bind(obj)
setTimeout(bindingTheObj , 2000);

let fun2 = obj.sayOccupation;

const bindingTheObj2 = fun2.bind(obj);
setTimeout(bindingTheObj2 , 3000)
