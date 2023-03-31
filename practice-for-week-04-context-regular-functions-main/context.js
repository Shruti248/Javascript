
// function testMe() {
//     console.log(this);
// }

// // testMe();


// class Dog {
//     constructor(name, isSitting) {
//       this.name = name;
//       this.isSitting = isSitting;
//     }

//     stand() {
//       this.isSitting = false;
//       return this.isSitting;
//     }
//   }

//   let dog = new Dog("Bowser", true);

//   console.log(dog);
//   // Bowser starts out sitting
//   console.log(dog.isSitting); // prints `true`

//   // Let's make him stand
//   console.log(dog.stand()); // prints `false`

//   // He's actually standing now!
//   console.log(dog.isSitting); // prints `false`

//   class Cat {
//     purr() {
//       console.log("meow");
//     }

//     purrMore() {
//       return this.purr();
//     }
//   }
//   let cat = new Cat();

// //   console.log(typeof(cat.purrMore()));

//   global.setTimeout(cat.purrMore(), 5000);



function hello() {
    console.log(`Hello ${this.firstName}`);
  }

  const greeting = new hello('Hello');
  console.log(greeting);
