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

 

//when values came through database.
// usually when we get values from database it come in form of 'ARRAY OF OBJECTS'

const users = [
    {
        id: '1',
        email: 'hr@persistentsystems.com'
    },
    {
        id: '1',
        email: 'hr@persistentsystems.comltd'
    },
    {
        id: '1',
        email: 'hr@persistentsystems.comin'
    },
    {
        id: '1',
        email: 'hr@persistentsystems.comcom'
    },
]



console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


// Destructuring of objects: 

const course = {
    courseName: "JS course",
    price: 999,
    location: "pune"
}

// course.courseName
// instead of writing too much console logs we destructure object :

// for that
// we write 1. const then {curly braces} and then = from where we're gonna extract the value (i.e course
// and write the variable name(value) which you want to extract like -> const {courseName} = course
// and the we dont need to use . operator to access the values we can diretly right as
// console.log(courseName)
// also plus point is we can give it another simple name to that variable for our understanding as 'Cname'
// if we think that its a very big variable name;
const {courseName} = course
const {courseName: Cname} = course

console.log(courseName); //op: JS course

console.log(Cname); //op: JS course


