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

// explicitly retutn is when we write return and
// Implicit return which is arrow function (one line)

const addFour = (n1,n2,n3,n4) => n1+n2+n3+n4

console.log(addFour(2,4,6,8));


// TIP/NOTE : when we use curly braces{} then we have to write return 
// when we use paranthetis () then we don't need to write written 
// const addFour = (n1,n2,n3,n4) => n1+n2+n3+n4 we can write like this also and 
// const addFour = (n1,n2,n3,n4) => (n1+n2+n3+n4) like this also 
// this concept will help in react
// 

// and when we want to return object then also we have to write paranthetis around object's curly braces 
// otherwise it will give you undefined

// e.g

const addnew = (n1,n2) => {username: "YA"}

console.log(addnew(2,3)); //undefined

// but when we do 
const addAgain = (n,m) => ({username: "AJ"})

console.log(addAgain(2,3)); //{ username: 'AJ' }
