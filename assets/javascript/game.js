// Computer outputs blank areas for current word
// Computer tells you how many guesses remaining
// After every guess, guess moves to already guessed or replaces a blank in the current word
// Play song after winning & change picture & update H1

// Variables
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessedLetters = [];
var wins = 0;
var losses = 0;
var guessesLeft = 13;
var gameSystems = ['NES', 'SNES', 'Genesis', 'PlayStation', 'Dreamcast'];
var blank = [];

// Functions that updates wins, losses, guessesleft
function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}

function currentWord() {
    document.querySelector("#currentWord").innerHTML = "Current Word: " + blank;
}

function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}

function updateGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function updateGuessedLetters() {
    document.querySelector("#guessedLetters").innerHTML = "Your guesses so far: " + guessedLetters + " ";
}

// Restart Game
function restartGame() {
    guessesLeft = 13;
    guessedLetters = [];
    updateGuessesLeft();
    updateGuessedLetters();
}

// Initializers
renderSystem();
updateWins();
currentWord();
updateLosses();
updateGuessesLeft();
updateGuessedLetters();
restartGame();

// Computer chooses random console
function renderSystem() {
    var randSystem = gameSystems[Math.floor(Math.random() * gameSystems.length)];
    console.log(randSystem);


// Converts string to array
var blankWord = randSystem.split(" ");
console.log(blankWord);

    // Player chooses letter
    document.onkeyup = function(event) {
        var playRand = event.key;
        console.log(playRand);

        // If letter is wrong, mark down letter as previously guessed
        if ((playRand === 'a') || (playRand === 'b') || (playRand === 'c') || (playRand === 'd') || (playRand === 'e') ||
            (playRand === 'f') || (playRand === 'g') || (playRand === 'h') || (playRand === 'i') || (playRand === 'j') ||
            (playRand === 'k') || (playRand === 'l') || (playRand === 'm') || (playRand === 'n') || (playRand === 'o') ||
            (playRand === 'p') || (playRand === 'q') || (playRand === 'r') || (playRand === 's') || (playRand === 't') ||
            (playRand === 'u') || (playRand === 'v') || (playRand === 'w') || (playRand === 'x') || (playRand === 'y') ||
            (playRand === 'z')) {

            if (randSystem != playRand) {
                (guessesLeft-- && guessedLetters.push(playRand));
                updateGuessesLeft();
                updateGuessedLetters();
            }

            // If letter right, mark as a win and restart
            if (randSystem == playRand) {
                wins++;
                updateWins();
                renderSystem();
            }

            // If player exhausts all guesses, mark as a loss and restart
            if (guessesLeft == 0) {
                losses++;
                updateLosses();
                renderSystem();
                restartGame();
            }

        }

    }
};