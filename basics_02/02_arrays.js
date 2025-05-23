const marvel_heroes = ["Ironman" , "Spiderman" , "thor"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// // ------------------------------------------------------------------
// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);//op: [ 'Ironman', 'Spiderman', 'thor', [ 'Superman', 'Flash', 'Batman' ] ]

// // * Arrays in javascript can take any type of input or entry it can be string, number, boolean, objects any type
// // thats why marvel/-heroes has taken 'dc_heroes' array as a input thats why its array inside a array
// // and that whole array is considered as a single input,
// //  therefore when we check length of marvel_heroes array its become 4
// // Ironman', 'Spiderman', 'thor', these are 3 entries and [ 'Superman', 'Flash', 'Batman' ] this array is a whole one entry(element) or[single element] and not separate 3

// console.log(dc_heroes);

// console.log(marvel_heroes.length); //op: 4

// // ------------------------------------------------------------------

// const myObj = {
//     name: "Rishi",
//     age: 22
// }
// marvel_heroes.push(myObj)
// console.log(marvel_heroes);
// // op: 
//         // [
//         //   'Ironman',
//         //   'Spiderman',
//         //   'thor',
//         //   [ 'Superman', 'Flash', 'Batman' ],
//         //   { name: 'Rishi', age: 22 }
//         // ]

// console.log(marvel_heroes.length); //op: 5

// // ------------------------------------------------------------------

// marvel_heroes.push(2)
// marvel_heroes.push(true)

// console.log(marvel_heroes);
// /** op: 
//     [
//         'Ironman',
//         'Spiderman',
//         'thor',
//         [ 'Superman', 'Flash', 'Batman' ],
//         { name: 'Rishi', age: 22 },
//         2,
//         true
//     ]
//  */
// console.log(marvel_heroes.length); //op: 7

// // here we have seen that array can take any type as a input 

// // now if i wanted to access these elemets then we can do it by using their indexes

// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);//op: [ 'Superman', 'Flash', 'Batman' ]

// console.log(marvel_heroes[3][1]); //Flash

// console.log(marvel_heroes[4].name);
// console.log(marvel_heroes[4].age);

// /* TO ACCESS DIFFERENT TYPES OF ELEMENTS IN ARRAY:

// Use array[index] for direct access, and if it's a complex type like array or object, you can chain it:
// - array[index][subIndex] for nested arrays.
// - array[index].key for object
// */


const allHeroes = marvel_heroes.concat(dc_heroes)

console.log(allHeroes); //op: [ 'Ironman', 'Spiderman', 'thor', 'Superman', 'Flash', 'Batman' ]

console.log(marvel_heroes);

// one more method to merge two or more arrays : spread operator

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

console.log(all_new_heroes); //op: [ 'Ironman', 'Spiderman', 'thor', 'Superman', 'Flash', 'Batman' ]

