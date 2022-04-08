"use strict";

console.log("Hello from External JavaScript");

alert('Welcome to my Website!');

let favColor = prompt("What is your favorite color");
    alert("Great, " + favColor + " is my favorite color too!");

let littleMermaidDaysRented = parseFloat(prompt('How many days did you rent Little Mermaid?'));
let brotherBearDaysRented = parseFloat(prompt("How many days did you rent Brother Bear?"));
let herculesDaysRented = parseFloat(prompt("How many days did you rent Hercules?"));
let rentalPricePerDayDollars = 3;
let totalPriceForRentals = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * rentalPricePerDayDollars;
    alert('Your total for rental is $' + totalPriceForRentals.toFixed(2) + ' dollars');

let googleHourlyRateDollars = parseFloat(prompt("What is your hourly pay rate at Google?"));
let amazonHourlyRateDollars = parseFloat(prompt("What is your hourly rate at AMazon?"));
let facebookHourlyRateDollars = parseFloat(prompt("WHat is your hourly rate at Facebook?"));

let hoursGoogle = parseFloat(prompt("How many weekly hours at Google?"));
let hoursAmazon = parseFloat(prompt("How many weekly hours at Amazon?"));
let hoursFacebook = parseFloat(prompt("How many weekly hours at Facebook?"));

let totalPayment = hoursGoogle * googleHourlyRateDollars +
    hoursAmazon * amazonHourlyRateDollars +
    hoursFacebook * facebookHourlyRateDollars +
    googleHourlyRateDollars;
    alert("Total payment is $" + totalPayment.toFixed(2));

let classIsNotFull = confirm("Confirm that the class is not full");
let classSchedulesCheck = confirm("Confirm that schedules check");

let studentEnrolled = classIsNotFull && classSchedulesCheck;
    alert('Student enrollment status: ' + studentEnrolled);

let discountBreakPoint = 2;
let numberOfItems = prompt("How many items were bought?");
let offerIsNotExpired = confirm("Confirm offer has not expired.");
let isPremiumMember = confirm("Customer is a premium member");

let applyProductDiscount = offerIsNotExpired && (isPremiumMember || numberOfItems >= discountBreakPoint);
    alert("Product discount applied: " + applyProductDiscount);
