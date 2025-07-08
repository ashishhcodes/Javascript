const myyObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift by Apple"
}

// for (const key in myyObject) {
//     console.log(key);
                                    // <-- this prints only keys 
// }

// for (const key in myyObject) {
//     console.log(myyObject[key]);
//                                  <-- this prints only values 
// }


for (const key in myyObject) {
    // console.log(`${key} shortcut is for ${myyObject[key]}`);
}
/* op: 
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for Swift by Apple
*/

const programming = ["java","javascript", "py", "rb", "cpp" ]

for (const [key,value] in programming) {
    // console.log(programming[key]);
       
}

// const map = new Map()
// map.set('IN',"India")
// map.set('UAE',"United Arab Emirates")
// map.set('UK',"United Kingdom")
// map.set('Bharat',"Bharat")
// map.set('USA',"United States of America")  

// for (const [key,value] in map) {
//     console.log(key,',',value);
    
// }

// we cannot use for in loop in map because map is not iterable

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


// | Feature        | for...of                          | for...in                             |
// | -------------- | --------------------------------- | ------------------------------------ |
// | Use Case       | To iterate over values            | To iterate over keys or indexes      |
// | Best For       | Arrays, Strings, Sets, Maps       | Objects, Arrays (only for indexes)   |
// | Returns        | Direct value (e.g., "BMW")        | Key or index (e.g., "0", "1", "2")   |
// | Common Use     | Reading or printing data          | Accessing values using keys/indexes  |

 