// while loop

// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index += 2
// }

let myArray = ["porsche", "bmw", "mustang", "audi"]
let arr = 0

while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr++
}
for (arr = 0; arr < myArray.length; arr++) {
    
console.log(`value in for loop is ${myArray[arr]}`);

}

// first while loop runs as arr = 0 initially
// after while finishes, we reset arr to 0 again before using it in the for loop
// both loops work fine because arr starts fresh each time


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");


// but in below case : 
let myArray2 = ["apple", "grapes", "kiwi", "litchy"]
let arr2 = 0

for (arr2 = 0; arr2 < myArray2.length; arr2++) {
    
console.log(`value in for loop is ${myArray[arr2]}`);

}
while (arr2 < myArray2.length) {
    console.log(`value is ${myArray2[arr2]}`);
    arr2++
}

// for loop works first, and arr2 becomes 4 after finishing
// while loop doesn't run because arr2 is already 4, so condition fails
// result: only for loop prints, while loop is skipped



// do - while loop

let score = 1
do {
    console.log(`score is ${score}`);
    score++
    
} while (score <= 10);


let newArr = ["a", "b", "c", "d"]
let rdm = 0

do {
    console.log(`alphabet is ${newArr[rdm]}`);
    rdm++
    
} while (rdm < newArr.length);