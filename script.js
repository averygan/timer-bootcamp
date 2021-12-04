// Please implement exercise logic here
// Build stopwatch UI
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
bottomContainer.classList.add('main');
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

// Add event listener for buttons
// startButton.addEventListener('click', startTimer);
// stopButton.addEventListener('click', stopTimer);
// resetButton.addEventListener('click', resetTimer);
// lapButton.addEventListener('click', lapTimer);

// Append UI
document.body.appendChild(mainContainer);
