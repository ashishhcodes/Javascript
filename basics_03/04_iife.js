// Immediately Invoked Function Expression

//this is named IIFE
(function learnJS(){
    console.log("Done!");
})();

// IIFE (Immediately Invoked Function Expression) is a function that runs right after it's created.
// It creates its own separate space to run code.
// This keeps the variables inside it private and avoids messing up the rest of your code.
// also end it with semicolon so if we want to write more invoked function
// becz it will never no when to stop thats why we have to write terminator there.  


// we  can write it as arrow function also

//and this is unnamed IIFE
( () => {
    console.log(`hey`);
} )();

// also we can write variables

//and this is unnamed IIFE
(  (name) => {
    console.log(`hello ${name} `);
    
})('yashh'); //op: hello yashh


let val1 = 10
let val2 = 4


function addNum(num1,num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(2,3)

console.log(result1);
console.log(result2);
