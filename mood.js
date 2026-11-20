// Tiana Bui 11/19/26

//Connect javascript variables to HTML elements using document.querySelector()
const quote = document.querySelector('#quote');
const title = document.querySelector('#title');
const buttons = document.querySelector('#buttons');

//Create moods object to store settings for each mood clicked by user
//This mood object will change the background color, text, and message color for each mood
const moods = {
    happy: {
        name: "Happy",
        bg: '#f7d200',
        text: '#0654a3',
        message: 'Sunshine with a warm smile!'},
    calm: {
        name: "Calm",
        bg: '#dda9e9',
        text: '#1a1ad0',
        message: 'Time for a reset!'},
    angry: {
        name: "Angry",
        bg: '#e71a03',
        text: '#141701',
        message: 'Take a shower!'},
    sleepy: {
        name: "Sleepy",
        bg: '#a0d1e8',
        text: '#6a4c3e',
        message: 'Go take a nap!'},      
};

//Create a function to change the page information
function handleMoodButtonClick(moodClick) {

   //Check to see if the mood button was clicked
    if (moodClick.target.classList.contains('mood-btn')) {
   //Create a variable named mood to get the selected mood button
    let mood = moodClick.target.getAttribute('data-mood');
  // Create a variable named moodSettings to find user's mood matching information
    const moodSettings = moods[mood];
  //Update the page by changing background color
    document.body.style.backgroundColor = moodSettings.bg;
  //Change the body text color
    document.body.style.color = moodSettings.text;
  //Change the message
    quote.textContent = moodSettings.message;
  //Change the title of the page to the Mood Name 
    title.textContent = moodSettings.name 
  //Add a random mood button 
    if (mood === 'randommood') {
    const moodKeys = Object.keys(moods); //['happy', 'calm', 'angry', 'sleepy']
    const randomIndex = Math.floor(Math.random() * moodKeys.length);
    mood = moodKeys[randomIndex];}
    }

 //Testing if the page changes accordingly to the clicked mood button
   console.log("Mood selected:", mood);
   console.log("Mood settings:", mood);
   console.log("randommood;", mood);
  
    }
  }

//Add one event listener for all 4 buttons
buttons.addEventListener('click', handleMoodButtonClick);

