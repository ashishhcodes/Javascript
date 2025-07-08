// 1. Write a function getSum(arr) that returns the sum of all elements in arr
let arr = [10, 20, 30, 40];
// Ans: 
let sum = 0
function getSum(arr) {
    for (let index = 0; index < arr.length; index++) {
       sum += arr[index]
    }
    return sum
}
console.log(getSum(arr));



//  2. Write a function countEvens(arr) that returns how many even numbers are in the array
let nums = [2, 5, 7, 8, 10, 13];
// Ans: 
let count = 0
function countEvens(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            count++
        }
    }
    return count
}
console.log(countEvens(nums));

    
// // 3. Create a function countChars(str) that counts characters excluding spaces
let inputStr = "Ashish Khandekar";
// // Ans:

// console.log(inputStr.split(","));
let charSplit = inputStr.split(",")
let parts = inputStr.


// // 4. Using for...of, print all items in uppercase
// let colors = ["red", "green", "blue"];
// // Your code here


// // 5. Reverse the array without using .reverse()
// let letters = ["a", "b", "c", "d"];
// // Your code here


// // 6. Loop through the object using for...in and print keys with values
// let student = {
//   name: "Ashish",
//   age: 22,
//   subject: "JavaScript"
// };
// // Your code here


// // 7. Print table of 5, but skip 5 x 5
// // Your code here


// // 8. What will be the output and why?
// let x = "5" + 1 + 2;
// console.log(x); // ?
// // Your explanation here


// // BONUS: Return initials from full name (e.g., "Ashish Bajirao Khandekar" => "A.B.K.")
// function getInitials(name) {
//     // Your code here
// }
// console.log(getInitials("Ashish Bajirao Khandekar"));
