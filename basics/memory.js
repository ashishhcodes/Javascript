// there are two types of memory..
// Stack
// Heap

// Primitive Types Uses Stack Memory
// Non-Primitive type uses Heap Memory

// * Whenever Stack memory is used  then we get the copy of the variable which we declared
// * and whenever anything is defined inside heap memory or uses heap memory 
// then we will get reference of that particulr variable or reference of original value
// it means whatever changes we will do it will make changes in original value also

// example

 let myName = "Java"

 let anotherName = myName

 console.log(myName); //java
 
//  anotherName = "Script"
myName = "frontend"
 console.log(myName); //frontend
 console.log(anotherName); //java

 /*
 Strings ("Java", "frontend") are primitive.
When you do let anotherName = myName, it copies the value, not a reference.
So even if you change myName later, anotherName stays the same.
 */


// But in Non-primitives 

let userOne = {
    email:"abc1@gmail.com",
    id: 2
}

// console.log(userOne);

let userTwo = userOne

console.log(userOne); //{ email: 'abc1@gmail.com', id: 2 }
console.log(userTwo); //{ email: 'abc1@gmail.com', id: 2 }

userTwo.email = "xyz@gmail.com"

console.log(userOne.email); //xyz@gmail.com
console.log(userTwo.email); //xyz@gmail.com

// 

 /*


| Feature                           | Primitives                               | Non-Primitives (Objects/Arrays)          |
| --------------------------------- | ---------------------------------------- | ---------------------------------------- |
| Example                           | `let a = "Java"`                         | `let a = { name: "Java" }`               |
| Type                              | String, Number, Boolean, null, undefined | Object, Array, Function                  |
| Stored in                         | Stack (direct value)                     | Heap (reference in stack, value in heap) |
| When assigned to another variable | **Value is copied**                      | **Reference is copied**                  |
| Are they connected after copy?    |    No (Independent values)               |     Yes (Both point to same object)      |
| If one changes, other affected?   |    No                                    |     Yes                                  |



Primitive: let b = a → copies the value, so b is independent.

Non-Primitive: let b = a → copies the reference, so both share the same object.

Objects (like {} or arrays []) are non-primitive —
 when you do let b = a, it copies the reference (address), not the actual value, 
 so changes made through one are visible in the other.


 */