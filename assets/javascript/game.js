// Start Game
// User presses a letter and only a letter (NO NUMBERS) (convert letter to lowercase)
// If letter is correct, blank underline changes to letter.
// If letter is wrong, mark as wrong letter and add to area where it says letters already guessed (pushing it multiple times doesn't reduce the number of guesses remaining)
// If run out of guess / player loses
// If guess all letters, player wins
// Restart game

var wins = 0;
var guessesRemaining = 12;

var gameSystem = ['Xbox', 'PlayStation', 'Wii', 'GameBoy', 'SNES', 'Dreamcast', 'Gamecube', 'Sega Saturn', 'Neo Geo', 'NES', 'Atari'];

// Game chooses current word from gameSystem array
var currentWord = gameSystem[Math.floor(Math.random() * gameSystem.length)];

console.log(currentWord);

// Record user input
document.onkeyup = function (event) {
    var userInput = event.key;
    console.log(userInput);
}

// console.log(userInput);

var html =
          "<p>Press any key to get started!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Number of guesses remaining: " + guessesRemaining + "</p>";
        //   "<p>losses: " + losses + "</p>" +
        //   "<p>ties: " + ties + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;