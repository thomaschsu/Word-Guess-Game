// Start Game
// Game chooses random word from array
// User presses a letter and only a letter
// If letter is correct, letter shows on list
// If letter is wrong, mark as wrong letter and added to area where it says letters already guessed, pushing it multiple times won't change the number of guesses remaining
// 

var console = ['xbox', 'playstation', 'wii', 'dreamcast', 'gamecube', 'sega saturn', 'neo geo', 'nes', 'atari']

function askQuestion (list) {
    for (i = 0; i < list.length; i++);
}


// Record user input
document.onkeyup = function (event) {
    var userInput = event.key;
    console.log(userInput);
}

document.getElementById("game").innerHTML = "Wins:"