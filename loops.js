// Tiana Bui 11/2/26

"use strict";


for(let crate = 1; crate <= 20; crate++){
    if(crate % 5 === 0){
        console.log(`Crate ${crate}: Fragile equipment!Handle with care!`);
        alert(`Crate ${crate}: Fragile equipment! Handle with care!`);
    }

    else if (crate % 2 === 0){
        console.log(`Crate ${crate}: Load crate!`);
        alert(`Crate ${crate}: Load crate!`);
    }

    else {
        console.log(`Crate ${crate}: Inspect crate!`);
        alert(`Crate ${crate}: Inspect crate!`);
    }

}

// Show the total number of crates scanned
console.log(`--- Total crates scanned: 20 ---`);
alert(`--- Total crates scanned: 20 ---`);

// Declare crate counters
let fragilecrateCount = 0;
let loadedcrateCount = 0;
let inspectedcrateCount = 0;

// Ask user to enter the number of crates that need to be scanned
let userInput = prompt(`How many crates need to be scanned?`);


// Exit the loop if user clicks cancel when entering the crate number
    if(userInput === null){
        alert(`You clicked cancel. Exiting the loop!`);
    } else {
        // Convert user input into a number as total crates
        let totalCrates = parseInt(userInput);


// Use for loop to scan the number of crate entered by user
for (let crate = 1; crate <= totalCrates; crate++){
    if(crate % 5 === 0){
        console.log(`Crate ${crate}: Handle with care!`); 
        alert(`Crate ${crate}: Handle with care!`);
        fragilecrateCount++; // Increment fragile crate counter
    } else if (crate % 2 === 0){
        console.log(`Crate ${crate}: Load crate!`);
        alert(`Crate ${crate}: Load crate!`);
        loadedcrateCount++; // Increment loaded crate counter
    } else {
        console.log(`Crate ${crate}: Inspect crate!`);
        alert(`Crate ${crate}: Inspect crate!`);
        inspectedcrateCount++; // Increment inspected crate counter
    }
}


    // Show how many crates were counted 
    console.log(`number of fragile crates: ${fragilecrateCount}`);
    alert(`Number of fragile crates: ${fragilecrateCount}`);
    console.log(`Number of loaded crates: ${loadedcrateCount}`);
    alert(`Number of loaded crates: ${loadedcrateCount}`);
    console.log(`Number of inspected crates: ${inspectedcrateCount}`);
    alert(`Number of inspected crates: ${inspectedcrateCount}`);
}






