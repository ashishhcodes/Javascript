let myDate = new Date()
console.log(myDate.toString()); //Wed May 21 2025 18:22:14 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); //Wed May 21 2025

console.log(myDate.toTimeString()); //18:24:21 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleDateString()); //5/21/2025

console.log(myDate.toISOString()); //2025-05-21T12:55:19.168Z

console.log(myDate.toJSON()); //2025-05-21T12:55:56.567Z

console.log(myDate.toLocaleString()); //5/21/2025, 6:26:49 PM

console.log(myDate.getFullYear()); //2025

console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getUTCDate());

let myCreatedDate = new Date(2025,8,5)

console.log(myCreatedDate.toDateString());

let TimeStamp = Date.now()

console.log(TimeStamp);


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());


const dayName = newDate.toLocaleString('default', {
    weekday: "long",
    
})
console.log(dayName);


