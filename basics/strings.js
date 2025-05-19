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






