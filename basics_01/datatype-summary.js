// DATATYPES
// 1. Primitive Datatypes
    // 7 Types :  String, Number, Boolean, null, undefined, Symbol, BigInt

// 2. Non- Primitives (Reference Types)
    //  Array, Object, Function

// Q. Is Javascript is dynamically typed or statically typed language?
// Answer. JavaScript is a dynamically typed language. 
// This means that the type of a variable is determined at runtime, not at compile time.
// In other words, you don't need to explicitly declare the data type of a variable when you create it;
// it can change during the execution of the program.


const score = 100
const scoreValue = 100.3 // here int float donble are considered as number type only there is no separe=ate type for float,double


// Symbol Example
const id = Symbol('123')     //if i want a value which should be unique always then use Symbol
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const nm = Symbol("code")
const anotherNM = Symbol("code")

// const nmm1 = Number(nm) //TypeError: Cannot convert a Symbol value to a number
console.log(typeof nm); //symbol
console.log(typeof anotherNM); //symbol
// console.log(typeof nmm1); //we cannot convert sYmbol to NUMBER



console.log(nm === anotherNM); //false

console.log(nm == anotherNM); //false

// BigInt example

// if i want the type of that value in bigInt type then simply put small case 'n' at the ending of value 
const bigNo = 9654356567890987655678906789797878676876568n

console.log(bigNo);
console.log(typeof bigNo);


// 2. Non- Primitives (Reference Types)
    //  Array, Object, Function


const plants = ["pothos", "spider-Plant","ZZ-plant","snake-plant"]

console.log(plants); //op: [ 'pothos', 'spider-Plant', 'ZZ-plant', 'snake-plant' ]

console.log(typeof plants); //object

let myObj = {
    name: "rishi",
    age: 22,
}

console.log(myObj); //{ name: 'rishi', age: 22 }
console.log(typeof myObj); // object


const myFunction = function() {
    console.log("hello world");
}
myFunction(); //hello world
console.log(myFunction); //op: [Function: myFunction]







