// Tiana Bui 10/28/26

"use strict";

// Declare three variables
let choice;
let num1, num2;

// Create menu using multi-line prompt()
choice = prompt(`Menu:
    1. Add two numbers
    2. Subtract two numbers
    3. Multiply two numbers
    4. Divide two numbers
    5. Exit`);

// Convert user's choice to a number
choice = Number(choice); // or pareseInt(choice)

// Use a switch statement to respond to user's selection
switch (choice) {
    case 1:
        num1 = Number(prompt("Enter the first number:"));
        num2 = Number(prompt("Enter the second number:"));
    alert(`The sum is ${num1 + num2}`);
    break;
    
    case 2:
        num1 = Number(prompt("Enter the first number:"));
        num2 = Number(prompt("Enter the second number:"));
    alert(`The difference is ${num1 - num2}`);
    break;
    
    case 3:
        num1 = Number(prompt("Enter the first number"));
        num2 = Number(prompt("Enter the second number (Do not divide by zero!):"));
    alert(`The product is ${num1 * num2}`);
    break;
    
    
    case 4:
        num1 = Number(prompt("Enter the first number"));
        num2 = Number(prompt("Enter the second number"));
    alert(`The quotient is ${num1 / num2}`);
    
    if (num2 === 0) {
        alert("Error: You can't devide by zero");
    } else {
        alert(`The quotient is ${num1 / num2}`);
    }
    break;

    case 5:
        console.log(`The program is now exiting`);
        alert(`The program is exiting`);

    default: 
    alert(`Error: Invalid choice`);
    console.log(`Error: invalid choice`);
    break;
}