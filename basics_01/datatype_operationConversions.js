// operations 
let value = 5
let negativeValue = -value

// console.log(value);
// console.log(negativeValue);

// console.log(typeof value);
// console.log(typeof negativeValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); //8
console.log(2/2);  //1
console.log(2%2);  //0

console.log(2/2/2/2); //0.25 (but not a good practice, i just checked )

let str1 = "hello "
let str2 = "JS"
let str3 = str1 + str2

console.log(str3);

console.log("2" + 2); //22
console.log("2" + 2 + "2");  //222
console.log(2 + 2 + "2");//42
console.log("2" + "2" + 2);//222
console.log("2" + 2 + 2);//222
console.log("2" + 2 + "2" + 2); //2222
console.log("2" + "2" + (2 + 2)); //224 and if brackets removed then op will be 2222
console.log(2 + 2 + "2" + "2" + 2); //4222

console.log("a" + 2 + 2); //a22
console.log( 2 + 2 + "a"); //4a
console.log(2 + 2 + "a" + "a" + 2 + 2); //4aa22

// if first operand is string then after all operands will only concanicated or supposed to be string and will print as it is
// but if the first operand is other or lets say number then it will do the operation first and then remaining operations 

// prefix postfix 

let x = 3;
const y = x++;

console.log(x,y);

// x is 4; y is 3 
// but why and how? -->
// // postfix x++ means first use the current value and then increase it thats why Y ka op aya 3 mean first use ((x as 3)for y)
// and then asssign the value to the x as 4 i mean increase the counter

// ******now prefix******
let a = 3;
const b = ++a;
console.log(a,b);

// in this case first assign the value or first increase the value or 1st do the operation and then sssingn
//  means first do ++a which means 4 so here in this case a = 4 ad b is also b = 4













