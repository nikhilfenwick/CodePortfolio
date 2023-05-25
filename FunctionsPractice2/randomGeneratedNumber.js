let oneNumber = 1000;
let twoNumber = 1;

// In this function we will generate a random number. 

function randomGeneratedNumber (){
    // console.log(" This Function Generates a Random Number "); 
    let generatedRandom = Math.floor((Math.random() * oneNumber) + twoNumber);
    return generatedRandom;
}

let x = randomGeneratedNumber();
// console.log(x); 

let y = "This Function is Used to Create a Random Number, Which is " + x;
console.log(y);

