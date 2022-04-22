"use strict";

var userRecordedInput = prompt("Enter an odd number between 1 and 50");
while(true) {
    if (userRecordedInput % 2 === 0 || userRecordedInput < 1 || userRecordedInput > 49) {
        if (userRecordedInput % 2 === 0 || userRecordedInput < 1 || userRecordedInput > 50) {
            alert("Invalid input.");
            userRecordedInput = prompt("Enter an odd number between 1 and 50");
        } else {
            break;
        }
    }
}
console.log("Number to skip is: " + userRecordedInput);

for(var i = 1; i < 50;i++){
    if (i === parseFloat(userRecordedInput)){
        console.log("Yikes! Skipping number: " + userRecordedInput)
        continue;
    }
    if (i % 2 !== 0){
        console.log("Here is an odd number: " + i)
    }
}





