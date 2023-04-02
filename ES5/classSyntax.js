// There are a few things specific to constructor functions worth highlighting:

// The name of the constructor function is capitalized. Following this convention will help you (and other developers) to correctly identify this function as a constructor function.
// The function doesn't explicitly return a value. When invoked with the new keyword, constructor functions implicitly return the newly created object. In just a bit, you'll see an example of this.
// Within the constructor function's body, the this keyword references the newly created object. This allows you to initialize properties on the object.

function constructorFunctionName(arg1 , arg2 , arg3){
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
}

// Invoking the constrcutor using the new Keyword
const fun = new constructorFunctionName('Arg1' , 'Arg2' , 'Arg3')

console.log(fun);  //Object
