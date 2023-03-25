const readline = require('readline')

console.log(typeof(readline));
console.log(readline);

let r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

// console.log("Interface : " , interface);

// r1.question("What's Up ? " , answer => {
//     console.log("User Response : " , answer);
//     r1.close();
// })

// console.log("Proving that r1 is asynchronous. Bcoz by the time user will input the answer , it will print the below code(which is this)");

// Asking 2 questions one after another
// r1.question("What is 1st Que ? " , answer => {
//     console.log("Ans 1 : " , answer);
//     // Code hangs over here , nothing happens after that bcoz connection is not closed.
//     // But if teh connection is closed , program termiates
// })

// r1.question("What is the 2nd Que ? " , answer => {
//     console.log("Ans 2 : " , answer);
//     r1.close();
// })


// Placing 2nd question  , inside 1st : question executes synchronously
r1.question("What is 1st Que ? " , answer => {
    console.log("Ans 1 : " , answer);

    r1.question("What is the 2nd Que ? " , answer => {
        console.log("Ans 2 : " , answer);
        r1.close();
    })
})


// This is referred as Callback CHaining
// Becomes complex as cb increases


// Solution : Use of teh named function instead of the anonymous function
// Reduced complexity
r1.question("Que 1 ? " , handleAnsOne);

function handleAnsOne(answer){
    console.log(answer);
    r1.question("Que 2 " , handleAnsTwo);
}

function handleAnsTwo(answer){
    console.log(answer);
    r1.close();
}
