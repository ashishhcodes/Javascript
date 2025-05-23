//array

const myArrr1 = [10,21,23,24,25]

myArrr1.push(8) //adds element to the array
myArrr1.push(7)
myArrr1.push(8)
myArrr1.pop() //remove the last inserted element in an array
myArrr1.shift() //Removes the first element from an array and returns it.
myArrr1.unshift(2) //Inserts new elements at the start of an array, and returns the new length of the array.
myArrr1.unshift(0)
console.log(myArrr1);

console.log(myArrr1.includes(9));
console.log(myArrr1.indexOf(0));

// console.log(myArr.join()); //Adds all the elements of an array separated by the specified separator string. converts array to string

console.log(typeof myArrr1);

const newArr = myArrr1.join()

console.log(typeof myArrr1); //object
console.log(typeof newArr); //string

console.log(newArr); //0,2,1,2,3,4,5,6,8,7


// // slice , splice

console.log("A " , myArrr1);

const myn1 = myArrr1.slice(1,3) //slice does not include 3rd (last value) in op

console.log("B ", myArrr1); 
console.log( myn1); //B [ 2, 21 ]


const myn2 = myArrr1.splice(1,3) //splice includes 3rd (last value) in op and also gets a new array with just spliced values and not old array 

console.log("C " , myArrr1);// C  [ 0, 24, 25, 8, 7 ] it has removed the elements that we spliced
console.log(myn2); // [ 2, 21, 23 ]


