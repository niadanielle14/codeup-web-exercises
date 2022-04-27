"use strict";
// Define a function named `isAString` that takes in a value and returns true if the input is a string, or false if the input is not a string.

// function isString(input){
//     return typeof input === "sting";
// }
// Define a function named `isNotANumber` that takes in a value and returns true if the input is not a number, or false if the input is a number. This function should consider that numeric strings are not numbers.

// function isNotANumber(input){
//     if (type of )
// }

// Define a function named `canBeANumber` that takes in a value and returns true if the input is a number or a numeric string, or false if the input is not a string or if it cannot be parsed to a number.


// function canBeANumber
// Define a function named `multiplyByTen` that takes in a value, multiplies it by ten, and returns the result. If the input is not a number and is not a numeric string, it returns false.

// function multiplyByTen(number) {
//     return number * 10;
//     if (number !== "string")
// }
//
//
//
// function randomNumber(input) {
//     return math.random(input,0);
// }
// function alphaBackwards(str) {
//     return str.split("").sort().join("");
// }
//
// console.log(alphaBackwards("apples"));
//
// ================================= WARM UP 4/27


// Create a function, createNumObject, that takes in two numbers and returns an object with the following properties:

function createNumObject(num1, num2) {
    if (num1 === num2) {
        return {
            lowest: num1,
            highest: num2
        }
    } else if (num1 > num2) {
        return {
            lowest: num2,
            highest: num1
        }
    } else {
        return {
            lowest: num1,
            highest: num2
        }
    }
}


console.log(createNumObject(1, 2), {lowest: 1, highest: 2});
console.log(createNumObject(5, 2), {lowest: 2, highest: 5});
console.log(createNumObject(5, 5), {lowest: 5, highest: 5});


    // lowest: LOWEST_NUMBER_HERE,
    //     highest: HIGHEST_NUMBER_HERE
// }

// Assume both inputs are number data types. The first argument may or may not be higher than the second argument. If both number inputs are equal, return the same object but with the same number value for both the lowest and highest property values.
//
//
//     EXAMPLES...


// console.log(createNumObject(1, 3), {lowest: 1, highest: 3}); // returns...

/*
  {
    lowest: 1,
    highest: 3
  }
*/

// createNumObject(10, 5) // returns...

/*
  {
    lowest: 5,
    highest: 10
  }
*/

// createNumObject(7, 7) // returns...

/*
  {
    lowest: 7,
    highest: 7
  }
*/
