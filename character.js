

alert("Welcome to the Adventure Realm! Let's create your hero!")

//store the user's responses into variables
const characterName = prompt("What is your character's name?")
const pet = prompt(`What kind of pet does ${characterName} have? (dragon, 
wolf, robot, unicorn, phoenix, etc.)`, "dragon");
const superPower = prompt("What is [characterName]'s special superpower?")
const likesFighting = confirm(`Does ${characterName} like 
fighting monsters? Click OK for YES
Click Cancel for NO`);

// The text above uses a template literal with backticks.

alert("Gathering magic for [characterName]... almost ready!");

alert(`=======================================================
                           YOUR ADVENTURE HERO 
=========================================================
Name: ${characterName}
Pet: ${pet}
Superpower: ${superPower}
Monster fighter? followed by "Yes" or "No" Monster fighter? ${likesFighting ? "Yes " : "No "}
In the land where fire and the sky collides, a superhero named ${characterName} and a legendary king animal of the land ${pet}, wielding the super power of ${superPower}!
The realm awaits your tale to be continued...
===============================================================`);


