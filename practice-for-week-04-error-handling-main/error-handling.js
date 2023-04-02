// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let res = sum([1 , 2]);
console.log(res);

// 2.
// tests

function sayName(name){

  if(typeof(name) === 'string'){
    return name;
  }else{
      throw Error('Invalid Name');
  }


}


try{
  console.log(sayName("Alex"));
console.log(sayName(1));
}catch(err){
  console.error(err);
}
// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try{

  // greet('This is the Greeting....')
  greet()
  if(greet()){
    throw Error;
  }


}catch(err){
  console.log('Hello');
}
