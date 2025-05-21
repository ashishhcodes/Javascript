// NOTE
// Number.MAX_SAFE_INTEGER = 9007199254740991

// Number.MIN_SAFE_INTEGER = -9007199254740991

// Number.MAX_VALUE = 1.7976931348623157e+308

// Number.MIN_VALUE = 5e-324




// javascript automatically detects the type of the variable but 
// but we can defo=ine it explicitly also that we want number type of data: like this->

const num = new Number(1000)

console.log(num); //op: [Number: 100]



console.log(num.toFixed(2,1));



console.log(num.toString(2)); //f; Converts the number to a string. You can also convert it to another base (radix).

// it comverts single way not vice versa like decimal to binary and again then binary to decimal..
//  to convert binary to decimal or any raix base to decimal we have another method called as parseInt(num,2) , lets try that also

console.log(parseInt("1f",16)); //31; here the input(first argument) must match the type of seocnd argumnent like if I written 1f (its in hexa,)
//  so i have to write 16 in the second argu 2 is not allowed there as its describes binary.!
// if  1111 then second term also must be 2 ot should be a match of base/radix and number match then it will convert to decimal


console.log(parseInt("1111",2)); // 15


// toFixed() : = Rounds the number to a fixed number of decimal places and returns it as a string.

let price = 94.48769

console.log(price.toFixed(2)); //94.49
// Rounds to fixed decimal places (as string)


// price.toExponential := Converts the number into exponential (scientific) notation.


let priceOne = 123456789
console.log(priceOne.toExponential());//1.23456789e+8
console.log(priceOne.toExponential(2));//1.23e+8
console.log(priceOne.toExponential(1));//1.2e+8
console.log(priceOne.toExponential(3));//1.235e+8
console.log(priceOne.toExponential(4));//1.2346e+8


// toPrecision()=  Formats the number to the given total number of digits (includes both before and after decimal).

let num1 = 123.456;
console.log(num1.toPrecision(4));    // "123.5"
console.log(num1.toPrecision(22));    // "123.4560000"


// more interesting one methiod is , if we want to read a number like currency then we use toLocaleString()
// 

let hundreds = 100000

console.log(hundreds.toLocaleString()); //100,000,000 bydefault it reads like us currency 
// but if we wantit in INR or indian currenycy simply a step

console.log(hundreds.toLocaleString('en-IN')); //10,00,00,000

console.log(hundreds.toLocaleString());//100,000
console.log(hundreds.toLocaleString('en-IN'));//1,00,000





