// object literals


// also we create object through constructor
// Object.create


// const JsUser = {} //this is how we declare an objects
const mySym = Symbol("KEY1")

const JsUser = {
    name:"P",
    "Full Name": "P T",
    age: 24,
    location: "Wani",
    email:"pfeva@gmail.com",
    [mySym] : "KEY2",
    isLoggedIn: false,
    lastLoginDays:["Mon", "Sat"]

}

// multiple ways to access object elements:

console.log(JsUser.name, JsUser.age);
console.log(JsUser.email);
console.log(JsUser.location);

// one more way

console.log(JsUser["isLoggedIn"]);
console.log(JsUser["lastLoginDays"]);
console.log(JsUser["Full Name"]);


// and if we want to check for Symbol tyoe also


console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

console.log(JsUser);
// op:
        // {
        // name: 'P',
        // 'Full Name': 'P T',
        // age: 24,
        // location: 'Wani',
        // email: 'pfeva@gmail.com',
        // isLoggedIn: false,
        // lastLoginDays: [ 'Mon', 'Sat' ],
        // [Symbol(KEY1)]: 'KEY2'
        // }

// also if you want to lock your values like after defining you dont want anyone to change it
// so you can use freeze() operator there.

// lets see before and after freeze effects

JsUser.email = "pfeva19@gmail.com"

console.log(JsUser); //op: 
// {
//   name: 'P',
//   'Full Name': 'P T',
//   age: 24,
//   location: 'Wani',
//   email: 'pfeva19@gmail.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Mon', 'Sat' ],
//   [Symbol(KEY1)]: 'KEY2'
// }

// now we'll use freeze

// Object.freeze(JsUser)

JsUser.email = "ash123@gmail.com"

console.log(JsUser); //op: 
    // {
    //   name: 'P',
    //   'Full Name': 'P T',
    //   age: 24,
    //   location: 'Wani',
    //   email: 'pfeva19@gmail.com', //see the value remains as it is as we h=tried to change it as "ash123@gmail.com"
    //   isLoggedIn: false,
    //   lastLoginDays: [ 'Mon', 'Sat' ],
    //   [Symbol(KEY1)]: 'KEY2'
    // }

    JsUser.greeting = function() {
        console.log("Hey there!");   
    }
    // greeting();

    // console.log(JsUser.greeting());
    JsUser.greeting();

    JsUser.greetingTwo = function(){
        console.log(`Hey There! ${this.name}`);
        
    }

    // console.log(JsUser.greetingTwo());
    JsUser.greetingTwo()
    