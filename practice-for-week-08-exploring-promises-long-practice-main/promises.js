/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here

function num1() {
    return 1;
}

async function num2() {
    // Async function returns a promise with the value
    return 2;
}

console.log('num1 : ', num1());
console.log('num2 : ', num2());

num2().then(result => console.log(result));

// IMPORTANT IMPORTANT IMPORTANT
// Whenever the async keyword is used, the function automatically returns a Promise and the value after the return keyword in the async function is the resolved value of that returned Promise



/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here

async function waiting() {
    // await : returns the resolved value of the promise
    let value = await num2();
    console.log('waiting ', value);
}

waiting();

// await stops all flow until the promise returns.

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here
async function waitForMyPromise() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!!!')
        }, 90)
    })
    const promise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!!!')
        }, 500)
    })

    let result = await promise;
    let result2 = await promise2;
    console.log('My Promise is : ', result);
    console.log('My Promise is : ', result2);
}

waitForMyPromise();



/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here

// As an alternative, you could also use then to wait for a promise

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resovled using then...')
    }, 2000)
}).then(result => console.log(result))
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resovled using then 2...')
    }, 1000)
}).then(result => console.log(result))


/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function pauseWithWait() {
    await wait(2000)
    console.log('Executed after 2 seconds');
}
pauseWithWait()

// You would want to use the wait function to execute code after the Promise returned from the function is fulfilled. The wait function wraps the asynchronous setTimeout in a Promise

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here
const tryRandomPromise = (randomValue) => {
    return new Promise((resolve, reject) => {
        if (randomValue > 0.5) {
            resolve('Success !')
        } else {
            reject('Random Error !')
        }
    })
}

// tryRandomPromise(0).then((res) => console.log(res)).catch(err => console.error(err))

// for (let i = 0; i < 10; i++) {
//     const random = Math.random();
//     wait(2000 + random * 1000)
//         .then(() => tryRandomPromise(random))
//         .then(res => console.log(i, res))
//         .catch(err => console.error(i, err))
// }


/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here

const tryTryAgain = async (i) => {

    const random = Math.random();

    await wait(3000 + random * 1000)

    try {
        const res = await tryRandomPromise(random);
        console.log(i, res);
    } catch (err) {
        console.error(i, err);
    }

}

for (let i = 0; i < 10; i++) {
    tryTryAgain(i);
}



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
console.log('END OF PROGRAM');
