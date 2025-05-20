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









