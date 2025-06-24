// SCOPE {}

let a = 200

if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log(b);
    
}

console.log(a);
// console.log(b);
console.log(c);


// Nested scope

function one(){
    const username = "Rish"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); we cannot access it outside
    
    two()
}

// one()

if (true) {
    const username = "VM"
    if (username === "VM") {
        const website = " youtue"
        console.log(username + website);
    }
    // console.log(website); err: cannot access here
}
// console.log(username); err: cannot access here


// +++++++++++++++++interesting que +++++++++++++++

console.log(addOne(5)); //op: 6

function addOne(num){

    return num + 1
}
// addOne(5)



// addTwo(5) //err: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2
}

console.log( addTwo(5));

addTwo(9)
addTwo(19)
addOne(2)

// in first case we have just declared the function so it can be accessable before initialization also
// but in second case we've declared aswell as hold the value n=inside a variable so thats why we cannot access it before initialization
// hoisting concept  