// Tiana 10/21/26

"use strict";

/* PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1: [Your question here-- see questions below}

    -Variable name personalized to question (no answer1)
   - Correct answer:
   - How I'll validate and check the answer :

3. Use that structure for all questions.

6. Math: How will I calculate the percentage?

7. Final feedback logic (if / else if / else):

// Question 1

// Question 2

// Question 3

// Question 4

// Question 5

// Calculate percentage using math

// Final feedback using if / else if / else

If statement that uses an alert statement about their score

// Final summary alert */

// -- ACTUAL CODE STARTS HERE --

let score = 0;

const Question1 = Number(prompt("What is 5 + 3?"));
const correctAnswer = 8;

//Increase the score if user answers the question correctly
if (Question1 === correctAnswer) {
    score++; // Increments score by 1
    alert("Correct answer! Congrats");
} else {
    alert("Incorrect answer! Try again");
    }

const Question2 = Number(prompt("What is 10-4?"));
const correctAnswer2 = 6;

if (Question2 === correctAnswer2) {
    score++; // Increments score by 1
    alert("Correct answer! Congrats");
} else {
    alert("Incorrect answer! Try again");
    }


const Question3 = Number(prompt("What is 4*3?"));
const correctAnswer3 = 12;

if (Question3 === correctAnswer3) {
    score++; // Increments score by 1
    alert("Correct answer! Congrats");
} else {
    alert("Incorrect answer! Try again");
    }



const Question4= Number(prompt("What is 20/5?"));
const correctAnswer4 = 4;

if (Question4 === correctAnswer4) {
    score++; // Increments score by 1
    alert("Correct answer! Congrats");
} else {
    alert("Incorrect answer! Try again");
    }

const Question5 = prompt("What is my favorite matcha latte flavor?");
const correctAnswer5 = "ube";

if (Question5 === correctAnswer5) {
    score++; // Increments score by 1
    alert("Correct answer! Congrats");
} else {
    alert("Incorrect answer! Try again");
    }

    let userInput = prompt("What is my favorite matcha latte flavor?")
// Check if user clicked "Cancel" (prompt returns null)
if (userInput === null) {
alert("You canceled the question");
} else {
    // Trim whitespace and convert to lower case 
      let cleanedInput = userInput.trim().toLowerCase();

    // Check if the input is empty (user clicked OK without typing anything)
    if (cleanedInput === "") {
    alert("Error: You left the box empty!");
    } else {
        // Valid input 
    alert(`You entered: ${cleanedInput}`);
        }
    }



    //Calculate final score percentage
    const totalQuestions = 5;
    let percentage = (score / totalQuestions) * 100;

    alert(`Your final score is ${score} out of ${totalQuestions} (${percentage}%)`);

    

    if (score === 3) {
    console.log("You passed! Good job!");
    alert(" WOW KEEP IT UP!")
} else if (score > 3) {
    alert("YOHOOOOO~ YOU NAILED THIS QUIZ!");
 } else {
    alert("You need a little more luck on your side next time:))");
    }






