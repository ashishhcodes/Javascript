// for in and for of

let fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
    console.log(fruit);
}
//op : 
// apple
// banana
// mango


// same for for...in

for (const index in fruits) {
    console.log(index);
}

//op : 
// apple
// banana
// mango


let person = { name: "Ashish", age: 22 };

// for (const [key,value] in person) {
// console.log(key,': ', value);

// }

// [ 'name', 'Ashish' ]
// [ 'age', 22 ]

for (const key in person) {
    console.log(key, ':', person[key]);
    
}
for (const element of Object.entries(person)) {
    // console.log(element);
}

// we cannot use for...of direcly on plain objects because a normal object is not iterable and
// for...of loop can only iterate on iterable objects , but to do it explicitly we can use Object.entries(person) it wioll gives us key and values in array format

let cars = ["BMW", "Audi", "Porsche"];
for (let i in cars) {
//   console.log(typeof i); //string
}

let book = {
  title: "JavaScript",
  author: "Ashish"
};

// for (const element of Object.entries(book)) {
//     console.log(element);
    
// }

for (const [key, value] of Object.entries(book)) {
  console.log(`${key}: ${value}`);
}
