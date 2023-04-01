// Depending on your use case, JavaScript also has two alternative function methods that allow you to bind context. These are Function.prototype.call and Function.prototype.apply.x

// While bind returns a function that can be called multiple times with the given context, call and apply will invoke the bound function immediately, returning the return value from that function.

class Dog {
    constructor(name) {
      this.name = name;
    }
  }

  class Cat {
    constructor(name) {
        this.name
    }
    purrNTimes(n) {
        for(let i = 0; i < n; i++) {
            console.log(`${this.name} says: meow`);
        }
    }
  }

  let dog = new Dog('Fido');
  let cat = new Cat('Meowser');

  // make Fido meow 5 times using `call`
  cat.purrNTimes.call(dog, 5);


  console.log('----------');

  // make Fido meow 5 times using `apply`
  cat.purrNTimes.apply(dog, [5]);


 console.log('----------------');

 function eatFruits(...fruits) {
    return `${this.firstName} ate ${fruits.join(' and ')}`;
  }

  class Person {
    constructor(firstName) {
      this.firstName = firstName;
    }
  }

  const mylo = new Person('Mylo');
//   console.log(eatFruits.apply(mylo, 'apple', 'orange', 'banana'));  --ERROR
console.log(eatFruits.apply(mylo, ['apple', 'orange', 'banana']));
