// we can define if as we dont want to run all of our code atonce
// we want to run it based on conditions like if this then run o/w don't likes this

const isUserLoggedIn = true

if (2 != "2") {
    console.log("executed!");
}
console.log("not");


const temprature = 41

if (temprature < 50) {
    console.log("Less than 50");
    
} else {
    console.log("greater than 50");
    
}

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`user power: ${power}`);
    
}
    console.log(`user power: ${power}`); //error


    // short hand notation : 

const balance = 100000

// if (balance > 10000) console.log("yes");

if (balance < 5000) {
    console.log("less than 5000");
    
} else if(balance < 7500) {
    console.log("less than 7500");
}else if(balance < 9500) {
    console.log("less than 7500");
} else{
    console.log("More than 7500");

}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allowed to buy courses");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In");
    
}
