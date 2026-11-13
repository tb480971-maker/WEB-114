// Tiana Bui 11/9/26

"use strict";

// Declare two global variables
let entryCount = 0;
let totalGas = 0;

// Ask user for their name
let userName = prompt(`Please enter your name`);
if (userName === null) {
    console.log("You cancelled the name prompt");
    alert("You cancelled the name prompt");
} else if (userName.trim() === "") {
    console.log("You must type a name");
alert("You must type a name");
} else {
userName = userName.trim();

// Ask user for their first week's gas amount
let average = calcGasAvg();
if (average === null) {
    alert("You cancelled entering gas totals");
} else if (entryCount === 0) {
    alert("No gas totals were entered");
} else {
    let message = "";
    if (entryCount === 1) {
        message = `${userName}'s gas total is $${totalGas.toFixed(2)}.`;
    } else {
        message = `${userName}'s average gas bill is $${average.toFixed(2)}.`;
    }
    alert(message);
}

// Show user the total gas entries entered
let message = "";
if (entryCount === 0) {
message = "No gas totals were entered";
} else if (entryCount === 1) {
    message = "1 entry was entered";
} else {
    message = `You entered ${entryCount} gas totals.`;
}
    alert(message);

}
// Create a function called calcGasAvg()
// Create a variable called input and weeklyGas to be used in the function
let weeklyGas;

function calcGasAvg() {
    entryCount = 0;
    totalGas = 0;
let input = prompt("Enter your first week's gas total. Enter -1 when done");
if (input === null) {
    return null;
}
let weeklyGas = parseFloat(input);

 // Create a While loop if weekly gas # -1
 while (weeklyGas !== -1) {
 if(isNaN(weeklyGas)) {
    alert("Please enter a valid number");

// Ask user again for the same entry
input = prompt("Enter your first week's gas total. Enter -1 when done");
if (input === null) {
    return null;
}
// Convert user's input to a decimal number
weeklyGas = parseFloat(input);

 } else {
    totalGas += weeklyGas;
    entryCount++;
}


// Ask user to enter their nextweek's gas total
 input = prompt("Enter your next week's gas total. Enter -1 when done");
 if (input === null) {
   return null;
 }

weeklyGas = parseFloat(input);
 }
// Calculate user's weekly average gas total
let averageGas;
if (entryCount > 0) {
    averageGas = totalGas / entryCount;
} else {
    averageGas = 0;
}
return averageGas;
}

 
