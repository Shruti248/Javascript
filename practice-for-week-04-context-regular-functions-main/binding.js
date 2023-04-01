// Calling `bind` on a function does not actually invoke the function; it simply creates a new function with a fixed `this` value.



class dog{
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log(this.name);
    }
}

let obj = new dog('Dog Name');
// console.log(obj);
// console.log(obj.sayHello());

let myFun =obj.sayHello;
let bindingTheContext = myFun.bind(obj);
console.log(bindingTheContext());



console.log('-----------------------------');

class Cat {
    purr() {
      console.log("meow");
    }

    purrMore() {
      this.purr();
    }
  }

  let cat = new Cat();

  // Bind the cat.purrMore function to the context of the cat object
  const boundPurr = cat.purrMore.bind(cat);

  global.setTimeout(boundPurr, 5000); // prints 5 seconds later: meow


  console.log('-----------------------------');

//   function hello() {
//     return `Hello ${this.firstName}`;
//   }

//   const derek = {
//     firstName: 'Derek'
//   };

//   console.log(hello.bind(derek));


  console.log('-----------------------------');

  function greeting(...messages) {
    const that = this;
    return messages.map(function(message) {
      return `${that.firstName} says ${message}`;
    });
  }

  const derek = {
    firstName: 'Derek'
  };

  const derekMessages = greeting.bind(derek, "Hello class!");
  console.log(derekMessages("Goodbye class!"));
