// Please implement exercise logic here
// GLOBAL VARIABLES
let counter = 0;

// BUILD STOPWATCH UI
/// //////////////////

// Main container
const mainContainer = document.createElement('div');
mainContainer.classList.add('main');

// Left container for lap data
const leftContainer = document.createElement('div');
leftContainer.classList.add('left');
mainContainer.appendChild(leftContainer);
// Lap data

// Top container to display elapsed time
const topContainer = document.createElement('div');
mainContainer.appendChild(topContainer);
// Display
const display = document.createElement('div');
display.classList.add('display');
topContainer.appendChild(display);

// Bottom container to contain buttons
const bottomContainer = document.createElement('div');
mainContainer.appendChild(bottomContainer);
bottomContainer.classList.add('bottom');
// Bottom buttons
// START button
const startButton = document.createElement('button');
startButton.classList.add('btn');
startButton.innerHTML = ('Start');
bottomContainer.appendChild(startButton);
// STOP button
const stopButton = document.createElement('button');
stopButton.classList.add('btn');
stopButton.innerHTML = ('Stop');
bottomContainer.appendChild(stopButton);
// RESET button
const resetButton = document.createElement('button');
resetButton.classList.add('btn');
resetButton.innerHTML = ('Reset');
bottomContainer.appendChild(resetButton);
// LAP button
const lapButton = document.createElement('button');
lapButton.classList.add('btn');
lapButton.innerHTML = ('Lap');
bottomContainer.appendChild(lapButton);

// Function for timer display
const convertTime = (value) => {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  let seconds = sec - (hours * 3600) - (minutes * 60); ///  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }
  if (seconds < 10) { seconds = `0${seconds}`; }
  return `${hours}:${minutes}:${seconds}`; // Return is HH : MM : SS
};

// Function for start button
const startTimer = () => {
  const ref = setInterval(() => {
    display.innerHTML = convertTime(counter);
    counter += 1;
  }, 1000);
};

// Function for stop button
// const stopTimer = () => {

// };

// Function for reset button

// Function for lap button

// INITIALIZE
/// /////////

const main = () => {
  document.body.appendChild(mainContainer);

  // ADD EVENT LISTENERS
  startButton.addEventListener('click', startTimer);
  // stopButton.addEventListener('click', stopTimer);
  // resetButton.addEventListener('click', resetTimer);
  // lapButton.addEventListener('click', lapTimer);
};

main();
