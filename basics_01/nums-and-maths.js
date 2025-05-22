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


// +++++++++++++++++++++++   Maths  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// absolute numbebr = abs() converts number to positive number 

console.log(Math.abs(-4)); //4
console.log(Math.round(94.5)); //prints the value in round figures/round off
// like in geeral how we round figures the value like if the after decimal value is less than 5 then we 
// keep the value as it is but if bigger than the 5 then we consider it as the next numeber; 
// e.g : 94.4 = 94 and 94.5 = 95 || 94.2 = 94 and 94.9 = 95
// but its only in round

// if you want that your value should not change no matter how much the decimal value is thenn use floor()
console.log(Math.floor(94.6)); // even if its 94.2 the answer shold 94 also 94.99 answer will be 94


// and if you want upper value that is after round figure like if you want 94.6 and 94.2 both always 95
// then use .ceil function 

console.log(Math.ceil(94.2)); //95

// // NOW if we want random numbers

console.log(Math.random()); // 0.4816551891934082 ; it will generate random values from 0 to 1

// if we multiply the value by 10 then we know, it shifts one digit to left

console.log(Math.random()*10); //3.012927075717433

// but we can get sometimes 0.0 also to avoid that we add 1 to the resuklt

console.log((Math.random()* 10) + 1); //here we have guearentee that min value would be 1 and never will be 0

// we will add .floor function here so that we will get the exact value like we are playing dice and we will get the exact num or randome nuber
console.log(Math.floor((Math.random()* 10)) + 1);

// another example
// it will work like dice 
const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


