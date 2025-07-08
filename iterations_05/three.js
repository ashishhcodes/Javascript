// for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    // console.log(`Each character is : ${greet}`);
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('UAE',"United Arab Emirates")
map.set('UK',"United Kingdom")
map.set('Bharat',"Bharat")
map.set('USA',"United States of America") 

// console.log(map);

// console.log(map.get(1)); 

for (const [key,value] of map) {
    console.log(key, ':-', value );   
}

// const myObject = {
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value );   
// } 
// Doesn't work




// | Feature        | for...of                          | for...in                             |
// | -------------- | --------------------------------- | ------------------------------------ |
// | Use Case       | To iterate over values            | To iterate over keys or indexes      |
// | Best For       | Arrays, Strings, Sets, Maps       | Objects, Arrays (only for indexes)   |
// | Returns        | Direct value (e.g., "BMW")        | Key or index (e.g., "0", "1", "2")   |
// | Common Use     | Reading or printing data          | Accessing values using keys/indexes  |


// my understandings: 

// for...of  AND  for...in 

// for...of – Value-based loop
// - Best for arrays, strings, sets, maps
// - Returns each element (value) one by one
// - Clean and readable when you only care about values and not indexes

// for...in – Index/key-based loop
// - Best for objects and sometimes arrays if you need indexes
// - Returns keys or indexes
// - Useful when you need to access both key and value

// When to use:
// - Use for...of -> when you want VALUES directly
// - Use for...in -> when you want INDEXES (array) or KEYS (object)

// Example: for...of with array
// let arr = ["a", "b", "c"];
// for (let val of arr) {
//   console.log(val); // a, b, c
// }

// Example: for...in with array
// let arr = ["a", "b", "c"];
// for (let i in arr) {
//   console.log(i); // 0, 1, 2
//   console.log(arr[i]); // a, b, c
// }

// Example: for...in with object
// let obj = {name: "Ashish", age: 22};
// for (let key in obj) {
//   console.log(`${key}: ${obj[key]}`);
// }

// // Use for...of with arrays, strings, maps, sets 
// Use for...in with objects 
// Don't use for...of directly on plain objects 
