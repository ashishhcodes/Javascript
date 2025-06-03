

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

// function subtractTwoNums(n1,n2){

//     let result = n1 - n2
//     return result
// }
// result = subtractTwoNums(10,5)

// console.log("Result : ", result); //op: esult : 5


// console.log(subtractTwoNums(10,5));

// function loginUserMSG(username){
//     if (username === undefined) {
//         // or same we can write like: both are same
//         // if (!username) { 
//         console.log("Please enter a username");
        
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMSG("AkhilJ")); //op: AkhilJ just logged in
// // console.log(loginUserMSG("")); //op:  just logged in
// console.log(loginUserMSG()); //op: undefined just logged in

function calculateCartPrice(num1){

    return num1
}

console.log(calculateCartPrice(200,400,100)); //2


// ... rest operator also spread  operator does looks same but its for array and object merging
function calculateCart(...num2){ //...rest operator to accept more inputs
    return num2
}

console.log(calculateCart(100,300,500,734,394)); //op: [ 100, 300, 500, 734, 394 ]


// passing object as parameter in function

const user = {
    username: "Jamval",
    id: 1
}

function newObjFun(anyobject) {
    console.log(`username is ${anyobject.username} and id is ${anyobject.id}`);
    
}

newObjFun(user) //op: username is Jamval and id is 1
// console.log(newObjFun(user));

// another way to pass object

newObjFun({
    username: "Akhil",
    id: 1
}) //op: username is Akhil and id is 1      

const myNewArray = [200,400,100,500]

function SecondValueReturn(getArray){
    return getArray[1]
}

console.log(SecondValueReturn(myNewArray)); //400

// anothr way to pass full another array

console.log(SecondValueReturn([200,1,3,4,299])); //op: 1

