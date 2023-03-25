const readline = require('readline');
let secretNumber;


function checkGuess(num) {
    if (num > secretNumber) {
        console.log("Too high.")
        return false;
    } else if (num < secretNumber) {
        console.log("Too Low.");
        return false;
    } else if (num == secretNumber) {
        console.log("Correct.");
        console.log("YOU WIN !");
        return true;
    }
}

let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// function askGuess(){
//     r1.question("Enter a guess : " , answer => {
//         if(checkGuess(parseInt(answer))){
//             r1.close();
//         }else{
//             askGuess();
//         }
//     })
// }

// askGuess();


// wohooooo... We now have the MVP (MINIMAL VIABLE PRODUCT) version of the game.


function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// secretNumber = randomInRange(0 , 100);

// console.log("Secret Number is : " , secretNumber);


// askGuess();


// function askRange(){
//     r1.question("Enter a minimum number : " , answerMin => {
//         r1.question("Enter a maximum number : " , answerMax => {
//             console.log("I'm thinking of a number between " + answerMin + " and " + answerMax);
//             secretNumber = randomInRange(parseInt(answerMin) , parseInt(answerMax));
//             askGuess(secretNumber);
//         })
//     })
// }

// askRange();

// Wohooo !!!! The game works completely great....

// Lets add some difficulty ...
// let's work on increasing the difficulty of the game by limiting the number of guesses a user can make.

let numAttempts;

// This function is modified....
function askGuess() {
    r1.question("Enter a guess : ", answer => {
        numAttempts--;
        if (checkGuess(parseInt(answer)) && numAttempts >= 0) {
            r1.close();
        } else if (numAttempts > 0) {
            askGuess();
        } else if (numAttempts == 0) {
            console.log("YOU LOSE !");
            // If you want to exit the entire program, you can use the process.exit() method
            process.exit();
        }
    })
}

// Making the ask Limit Dynamic

// callback chain order would be askLimit -> askRange -> askGuess. If you follow this order, you'll need to call askLimit in the global scope to begin the game.


function askLimit() {
    r1.question("Enter the Number of Attempts required : ", attemptsRequired => {
        numAttempts = attemptsRequired;
        r1.question("Enter a minimum number : ", answerMin => {
            r1.question("Enter a maximum number : ", answerMax => {
                console.log("I'm thinking of a number between " + answerMin + " and " + answerMax);
                secretNumber = randomInRange(parseInt(answerMin), parseInt(answerMax));
                askGuess(secretNumber);
            })
        })
    })
}

askLimit();
