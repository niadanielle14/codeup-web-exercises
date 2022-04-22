"use strict";

var timesTwo = 2;
while(timesTwo < 65536) {
    console.log(timesTwo);
    timesTwo *= 2;
    var giveVal = 2;
    while (giveVal < 65536) {
        console.log(giveVal);
        giveVal *= 2;
    }
}

var totalCones = Math.floor(Math.random() * 50) + 50;
do {
    var conesSold = Math.floor(Math.random()*5 + 1)
    var conesSold = Math.floor(Math.random()*5 + 1);
    if (totalCones - conesSold >= 0){
        totalCones -= conesSold;
        console.log("Sold " + conesSold + "!  I have " + totalCones + " left!");
    } else {
        console.log("I cannot sell you " + conesSold + ", I only have " + totalCones + " left.");
    }
}while(totalCones > 0);