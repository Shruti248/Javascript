function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let arrNew = new Array();
    for(let i = 1 ; i<arr.length ; i+=2){
        arrNew.push(arr[i])
    }
    return arrNew;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let arrNew1 = new Array();
    for(let i = arr.length-1 ; i>0 ; i-=2){
        arrNew1.push(arr[i])
    }
    return arrNew1;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let arrNew2 = new Array();
    for(let i = 1 ; i<=arr.length ; i*=2){
        arrNew2.push(arr[i])
    }
    return arrNew2;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let arrNew3 = new Array();
    for(let i = 1 ; i<arr.length ; i^=n){
        arrNew3.push(arr[i])
    }
    return arrNew3;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let arrNew4 = new Array();
    for(let i = 0 ; i<arr.length/2 ; i++){
        arrNew4.push(arr[i])
    }
    return arrNew4;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let arrNew5 = new Array();
    for(let i = arr.length/2 ; i<arr.length; i++){
        arrNew5.push(arr[i])
    }
    return arrNew5;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
