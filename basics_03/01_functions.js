

// function sayMyName(){
   
//     console.log("R");
//     console.log("I");
//     console.log("S");
//     console.log("H");
//     console.log("I");

// }
// sayMyName() 
// //op:
// // R
// // I
// // S
// // H
// // I

// // sayMyName if we write only like this, then its the reference of that function
// // sayMyName() if we write like this with parenthesis, then its the execution of that function

// // console.log(typeof sayMyName);


// // function to add two numbers: 

// function addTwoNums(num1,num2){
//     console.log(num1 + num2);
// }
// addTwoNums(3,2) //op: 5
// addTwoNums(3,"2") //op: 32 
// addTwoNums("3","2") //op: 32
// addTwoNums("3","2") //op: 32
// addTwoNums("a",2) //op: a2
// addTwoNums(3,"b") //op: 3b
// addTwoNums("3",null) //op: 3null
// addTwoNums(null,null) //op:0
// addTwoNums(null,2) //op: 2

function subtractTwoNums(n1,n2){

    let result = n1 - n2
    return result
}
result = subtractTwoNums(10,5)

console.log("Result : ", result); //op: Result : 5


// console.log(subtractTwoNums(10,5));


