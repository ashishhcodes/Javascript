const tinderUser  = new Object()

tinderUser.id = "123Abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// Note : we can create as many no of nested objects if we want 
// e.g ->
const regulerUser = 
{
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Rishi",
            lastName: "Bhosale" 
        }
    }
}

// now we will print this 

console.log(regulerUser.fullname); //op: { userFullName: { firstName: 'Rishi', lastName: 'Bhosale' } }
// we can go more nested

console.log(regulerUser.fullname.userFullName); //op : { firstName: 'Rishi', lastName: 'Bhosale' }

console.log(regulerUser.fullname.userFullName.firstName); //Rishi
console.log(regulerUser.fullname.userFullName.lastName); //Bhosale

// NOTE: 
console.log(regulerUser.userFullName); //op: undefined
//  if we write like this then it will give op like this -> undefined
// thats why while accessing the nested objects or nested members we have to give references ine by one like this ->
// reguleruser -> fullname -> userFullName -> firstName/lastName

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3); //op: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// same problem like array inside array here object insude object

const obj4 = Object.assign({},obj1,obj2) 
// op:Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

console.log(obj4);//op: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


console.log(obj1); //op:{ '1': 'a', '2': 'b' }
console.log(obj2); //op: { '2': 'c', '3': 'd' }

console.log(obj4 === obj1);



const objNew ={ ...obj1, ...obj2}

// while doing spread operator with arrays use array literals i.e [square brackets] -> [...ob1 , ...ob2]
// whereas in case of objects use object literal i.e  {curly braces} -> {...obj1 , ...obj2}
console.log(objNew);


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 