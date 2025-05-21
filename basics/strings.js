// STring Interpolation

// (syntax)

const name = "John Doe"
const id = 1 
const email = "abk@gm"

console.log(`My name is ${name} and my id is ${id} and mail is ${email.toUpperCase()}`);
// this is a good way to print strings


const gameName = new String('soccer')

console.log(gameName); //op : [String: 'soccer']
console.log(gameName[0]); //op : s

// exploring other prototype methods

console.log(gameName.length); //6

console.log(gameName.toLocaleUpperCase()); //SOCCER (and it will only remain till output it will not change it as SOCCER)

console.log(gameName.charAt(2)); //c
console.log(gameName.indexOf('s')); //0
console.log(gameName.substring(0,5)); //socce

// console.log(gameName.trim(2));
console.log(gameName.replace('s','t')); //op: toccer

// some protype methods with meaning 

console.log(gameName.charCodeAt(2)); //op: 99; Returns the Unicode (ASCII code) of the character at the given index.

console.log("c".charCodeAt()); // 99


console.log("Hi".concat(" there")); // op: Hi there; Used to join two or more strings together.
//  It works the same as +, but as a method.

console.log("Javascript".includes("asc")); //op: true; Checks whether a string contains a specific substring. Returns true or false.

console.log("banana".indexOf("a")); //op: 1; Returns the first position where the substring appears. If not found, returns -1.

console.log("banana".lastIndexOf("a")); //op: ; Same as indexOf, but finds the last occurrence of the substring.

console.log("JavaScript".slice(0, 4)); //op: Java;  Extracts a portion of a string from the start index to end (not included).
//  It supports negative values too.

console.log("JavaScript".slice(-5));

console.log("JavaScript".slice(0));

console.log("JavaScript".slice(2,-2));


// after i tried slice(0) why did it printed Javascript
// because if you entered one number it will count from evry character from that number and prints it 


console.log("Core".slice(-2)); //op: re

console.log("Core".slice(0)); //op Core
console.log("Core".slice(1)); //op ore
console.log("Core".slice(2));//op: re
console.log("Core".slice(-3)); //op: ore
console.log("Core".slice(-4)); //op: Core
console.log("Core".slice(-2)); //op: re
console.log("Core".slice(-1)); //op : e
console.log("Core".slice(0)); //op : Core 



// substring
// its similar to slice but can't accept negative values

console.log("JavaScipt".substring(2,5));

 // "hello"
console.log("   hello  ".trim()); //op: hello ; Removes whitespace from both sides.

console.log("hello this is my name".replace("this","john")); //op:hello john is my name ;Replaces a substring or pattern.


// split(); :- Splits string into an array.
console.log("apple,banana,grape".split(""));
/* op:[
  'a', 'p', 'p', 'l', 'e',
  ',', 'b', 'a', 'n', 'a',
  'n', 'a', ',', 'g', 'r',
  'a', 'p', 'e'
]
*/

console.log("apple,banana,grape".split(",")); //op: [ 'apple', 'banana', 'grape' ]


// .repeat(n) :- Repeats the string n times.

console.log("he".repeat(4)); //op:hehehehe

console.log("5".padStart(5,".")); //op: ....5 ; Adds characters to the start until target length is met

console.log("hey".padEnd(10,"!")); //op: hey!!!!!!! Adds characters to the end until target length is met


// console.log();








