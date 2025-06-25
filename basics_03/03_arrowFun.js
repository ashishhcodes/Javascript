// const user = {
//     username: "Yash",
//     priceOfWebsite: 9999,

//     welcomeMsg: function () {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
        
//     }
// }
// user.welcomeMsg()

// user.username = "Rishi"
// user.welcomeMsg()

// console.log(user.username);

// console.log(this);


// function myFun(){
//     let username = "ABC"
//     console.log(this.username); //undefined

//     // bcz we cannot use THIS keyword directly inside function but we can use inside object
    
// }
// myFun()

// const coffee = () => {
//     let username = "radha"
//       console.log(this); 
// }
// coffee()  //empty {}

// ARROW FUNCTION 
// () => {}

    //  also we can hold it inside a variable also then it will look like
    // const coffee1 = () => {}
        
const addTwo = (num1, num2) => {
    return num1 + num2 
}
console.log(addTwo(3,2));


// Implicit return arrow function (one line)

const addFour = (n1,n2,n3,n4) => n1+n2+n3+n4

console.log(addFour(2,4,6,8));
