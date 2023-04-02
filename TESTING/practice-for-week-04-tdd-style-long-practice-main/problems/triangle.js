// Your code here

class Person {
    constructor(name , age) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      return `${this.name} says hello!`;
    }

    visit(person) {
      return `${this.name} visited ${person.name}`;
    }



    static greetAll(people) {
      return people.map((person) => person.sayHello());
    }
  }

  module.exports = { Person };
