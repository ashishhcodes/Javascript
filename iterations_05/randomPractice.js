
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }
// console.log(sum);

/**
0 = 0 + 1 = 1
1 = 1 + 2 = 3
3 = 3 + 3 = 6
6 = 6 + 4 = 10
10 = 10 + 5 =  15
 */

// let num = 1

// if (num % 2 == 0) {
//     console.log(`${num} is even`);
// }else{
//     console.log(`${num} is odd`);   
// }


// Write a loop that prints all even numbers from 1 to 20.

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }   
// }

// let fruits = ["apple", "banana", "mango"];
// for (let fruit of fruits) {
//   console.log(fruit.toUpperCase());
// }
// APPLE
// BANANA
// MANGO

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   if (i % 2 === 0) continue;
//   sum += i;
// }
// console.log(sum);
// 0 = 0 + 1 = 1
// 1 = 1 + 3 = 4
// 4 = 4 + 5 = 9

// let num = 5
// for (let i = num; i <= num; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`); 
//     }
// }

// let num = 5
// while (i <= num) {
    
// }


// let items = ["pen", "book", "bottle"];
// for (let item of items) {
//     console.log(item);
    
// }
// for (const key in items) {
   
//     console.log(key);
    
// }

 // if (Object.prototype.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }

    // for (const key in object) {
    //     if (Object.prototype.hasOwnProperty.call(object, key)) {
    //         const element = object[key];
            
    //     }
    // }

    // const myObj = {
    //     username: "ashish",
    //     mail: "rb@gmail.com"
    // }
    // for (let element of Object.entries(myObj)) {
    //     console.log(element);
        
    // }

    // for (let key in myObj) {
    //     if (Object.prototype.hasOwnProperty.call(myObj, key)) {
    //         const element = myObj[key];
    //         console.log(element);
            
            
    //     }
    // }

// function add(a, b) {
//   return 
// }

// Write a function isEven(num) that returns true if number is even, else false.


// function isEven(num) {
//     // if (num % 2 == 0) {
//         return num % 2 === 0;
//     // }else{
//     //     return false
//     // }
// }
// console.log(isEven(5));
 

// Write a function getInitials(name)
// Input: "Ashish Khandekar"
// Output: "A.K."

// 💡 Hint: Use split() and charAt(0)
//  function getInitials(name){
//     console.log(name.charAt(0));
    
//  }
//  getInitials("Ashish Khandekar")

function getInitials(name){

    let parts = name.split(" ");
    let newName = "";
    for (let i = 0; i < parts.length; i++) {
        // console.log(parts.length);
        
        newName += parts[i].charAt(0) + "."; //  newName += parts[i].charAt(0).toUpperCase() + "."; to get in upperCase
        
    }
        return newName 
 }
//  getInitials("Ashish Khandekar")
 console.log(getInitials("Ashish Khandekar"))





//  Write a function that prints the multiplication table of any number passed as argument.
// Call it as printTable(7);

// function printTable(num) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(` ${num} * ${j} = ${j*num}`);
//     }
// }
// printTable(5)