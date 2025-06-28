

const userEmail = []

if (userEmail) {
    console.log("got user email");
}else{
    console.log("don't have user email");
    
}

// falsy values : values which are supposed to be false always
// false , 0 , -0 , BigInt 0n , "" (empty string) , null , undefined , NaN

// truthy values 
// "0" may we consider 0 as falsy value but not here
// because 0 is covered with string so its a truthy value 
// "false" is also truthy value beacuase false is inside string
// " " space inside string is also truthy value except empty string i.e "" , other all things
// whoich are covered with string incluing a space also " " is a truthy value always 
// empty array and objects are also truthy values i.e [] , {}
// also function(){} is also truthy (Empty function)

// we have given email an empty array which is not a good practice still if we wanna figure out ki if its a array or size of it 
// then we will check like this : 
// Empty Array check
if (userEmail.length === 0) {
    console.log("Array is empty");
    
} else {
    console.log("not");
    
}

// Empty objects check

const emptyObj = {}
if (Object.keys(emptyObj).length === 0 ) {   //Object.keys(emptyObj) <-- this will give us an array format
    console.log("object is empty");
    
}

// Nullish Coalescing Operator (??) -> null , undefined 

// this is like if we are talking to database or using database and if any value is not supporting or anythng
// so instead of disturbing all the code we give it two choices if this then print this
// like if we dont have a value in database so in the op it will disturb your app/code or gives error 
// so what we do , we told the database if you dont find any then assign null to it or undefined to it
// E.g
let val1;
val1 = 5 ?? null
console.log(val1);
// its running now but we use it tp avpid complex prblms 
// same with undefined 

val1 = undefined ?? 10
console.log(val1);

//  it can be said to be fallback 
// like if we get errors then hiw we will handle it ?
// or print something instead of error if error comes 

// NOTE null Coalescing operator and ternary operator are twpo different things

// Ternary Operator 
//  condition ? true : false 
//  if its true then it will print the value which is right after ? question mark 
// and if its false then it will print the value which is next to : colans 
// it is a short hand if else we can say 

// e.g

const iceTeaPrice = 79

iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");

