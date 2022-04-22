"use strict";

var multiplier = 7;
for (var i = 0; i <= 10; i++) {
    var result = multiplier * i;
    console.log(multiplier + ' x ' + i + ' = ' + result);
}

for(var i = 0; i < 10;i++) {
    var randomNumber = Math.floor((Math.random() * 180) + 20);
    randomNumber % 2 === 0 ? console.log(randomNumber + " is even") : console.log(randomNumber + " is odd")
}
for(var i = 1;i <= 9;i++) {
    var numPrinted = "";
    for (var j = 0; j < i; j++) {
        numPrinted += i;
    }
    console.log(numPrinted);
}

var startNumber = 100;
for(var i = 0;i < 100;i += 5){
    console.log(startNumber - i);
}