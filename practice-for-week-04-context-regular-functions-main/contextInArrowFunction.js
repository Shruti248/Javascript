// Arrow functions do not have inherent bindings to a this object based on context; instead, their this is lexically bound.

// This just means that an arrow function's this refers to whatever code contains it, not calls it. This makes them much more flexible for use in method callbacks than normal anonymous functions.

class Dog {
    constructor(name) {
      this.name = name;
    }

    bark = () => {
      console.log(`${this.name} barked at you`);
    }
  }

  const fido = new Dog("Fido");
  fido.bark(); // Fido barked at you
  const fidoBark = fido.bark;
  fidoBark();  // Fido barked at you


  function greeting(...messages) {
    return messages.map(message => {
      return `${this.firstName} says ${message}`;
    });
  }

  const derek = {
    firstName: 'Derek'
  };

  const derekMessages = greeting.bind(derek, "Hello class!");
  console.log(derekMessages("Goodbye class!"));
