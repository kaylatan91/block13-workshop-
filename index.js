//Tab 1: Is Truthy
//If the value is truthy, print true;
//If the value is false, print the corresponding result: 
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";

const input = "I am a string"

if (input === "I am a string") {
    console.log("true")
} else if (input === false){
    console.log("The boolean value false is falsy")
} else if (input === null) {
    console.log("The null value is falsy")
} else if (input === undefined) {
    console.log("undefined is falsy")
} else if (input === 0) {
    console.log("The number 0 is falsy (the only falsy number)")
} else {
    console.log("The empty string is falsy (the only falsy string)")
}

// //Tab 2: Number Line
// //Use if/else statements that take the sum of two numbers and prints the corresponding result:
// // sum + " is less than -1000";
// // sum + " is a negative number";
// // sum + " is equal to 0";
// // sum + " is larger than 0";
// // sum + " is greater than 100";

const num1 = -5
const num2 = 0
let sum= num1 + num2

if (sum < 0 && sum >= -1000) {
    console.log(sum + " is a negative number") 
} else if (sum < 0 && sum < -1000) {
    console.log(sum + " is less than -1000")
} else if (sum > 0 && sum < 100) {
    console.log(sum + " is greater than 0")
} else if (sum == 0) {
    console.log(sum + " is equal to 0")
} else {
    console.log(sum + " is greater than 100")
}




// //Tab 3: Greater than 5
// //Use if/else statements to create a JS code in a script tag that prints true if both parameter are greater or equal to 5

const num1 = 5
const num2 = 5
if (num1 && num2 >= 5) {
    console.log("true")
}
else {
    console.log("false")
}


//Tab 4: Pair and Compare
//Use if/else statements that compares two sets of two values
//Create a script tag for the two sets of values given 
//Create a console.log that will correspond to both values and make sure if they're truthy

const param1a = "cat"
const param1b = "cat"
const param2a = 6
const param2b = "6"

if (param1a == param1b || param2a == param2b) {
    console.log ("true")
} else {
    console.log ("false")
}