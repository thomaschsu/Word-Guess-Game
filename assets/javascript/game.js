// After every guess, guess moves to already guessed or replaces a blank in the current word
// Play song after winning & change picture & update H1
// Variables
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessedLetters = [];
var wins = 0;
var losses = 0;
var guessesLeft = 15;
var gameSystems = ['NES', 'SNES', 'Genesis', 'PlayStation', 'Dreamcast'];
var blank = [];
var randSystem;

// Functions that updates wins, current word, losses, guessesleft, guessedletters
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
    document.querySelector("#guessedLetters").innerHTML = "Your guesses so far: " + guessedLetters.join(', ') + " ";
}

// Restart Game
function restartGame() {
    guessesLeft = 15;
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

function renderSystem() {

    // Computer chooses random game console
    var randSystem = gameSystems[Math.floor(Math.random() * gameSystems.length)];

    // Converts game console to lower case
    var randSystemFix = randSystem.toLowerCase();
    console.log(randSystemFix);

    // Computer outputs blank areas for current word
    for (var i = 0; i < randSystem.length; i++) {
        blank = blank + "_ ";
    }

    // Player chooses letter
    document.onkeyup = function(event) {
        var playRand = event.key;
        console.log(playRand);


        // Only play if user presses a letter
        if ((playRand === 'a') || (playRand === 'b') || (playRand === 'c') || (playRand === 'd') || (playRand === 'e') ||
            (playRand === 'f') || (playRand === 'g') || (playRand === 'h') || (playRand === 'i') || (playRand === 'j') ||
            (playRand === 'k') || (playRand === 'l') || (playRand === 'm') || (playRand === 'n') || (playRand === 'o') ||
            (playRand === 'p') || (playRand === 'q') || (playRand === 'r') || (playRand === 's') || (playRand === 't') ||
            (playRand === 'u') || (playRand === 'v') || (playRand === 'w') || (playRand === 'x') || (playRand === 'y') ||
            (playRand === 'z')) {

            // If user input is not found in the word, push it to guessed letters and remove a guess left
            if (randSystemFix.indexOf(playRand) === -1) {
                (guessedLetters.push(playRand) && guessesLeft--);
                updateGuessesLeft();
                updateGuessedLetters();
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

// // If letter right, mark as a win and restart
// if (randSystem == playRand) {
//     wins++;
//     updateWins();
//     renderSystem();
// }