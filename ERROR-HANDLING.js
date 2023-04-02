// const first = Error("I am Error");
// const second = new Error("I, too, am Error");

// console.log(first); // Error: I am Error
// console.log(second); // Error: I, too, am Error



// function giveMeNumber(num) {
//     if (typeof num !== "number") {
//       throw new Error("Give me a number!");
//     } else {
//       return "yay number!";
//     }
//   }

//   console.log(giveMeNumber(1)); // prints "yay number!";
//   console.log(giveMeNumber("apple")); // Uncaught Error: Give me a number!
//   console.log(giveMeNumber(1)); // doesn't get run


function safeDivide(a, b) {
    if (b === 0) {
      throw new Error("cannot divide by zero");
    } else {
      return a / b;
    }
  }

  try {
    console.log(safeDivide(30, 5)); // prints 6
  } catch (error) {
    console.error(error.name + ": " + error.message);
  }

//   console.log("hello"); // prints hello


//   Important! One thing to note about Syntax Errors is that many of them can't be caught using try catch blocks.
// try {
//     if (true { // throws "SyntaxError: Unexpected token '{'"
//         console.log("SyntaxErrors are the worst!");
//     }
// } catch (e) {
//     console.log(e);
// }

// This is because this kind of SyntaxError happens at compile time not run time. Any errors that happen at compile time can't be caught using try catch blocks.


// const hello = 'Hello World';
// try {
//   hello();
// } catch {
//   console.log("Invoking 'Hello World' failed");
// }


try {
    console.log(typeof(hello));
    if (typeof hello !== 'string') {
      throw new Error('Hello?');
    }
  } catch(e) {
    console.log(e.message);
  }
