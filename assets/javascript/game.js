// After every guess, guess moves to already guessed or replaces a blank in the current word
// Play song after winning & change picture & update H1
// Variables
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessedLetters = [];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var gameSystems = ['NES', 'SNES', 'Genesis', 'PlayStation', 'Dreamcast', 'GameBoy', 'XBOX'];
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
    guessesLeft = 10;
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
    for (var i = 0; i < randSystemFix.length; i++) {
        blank = blank + "_ ";
    }

    for (var i = 0; i < randSystemFix.length; i++) {
        blank = blank.replace("_", randSystemFix.charAt(i));
    }

    // Player chooses letter
    document.onkeyup = function(event) {
        var playGuess = event.key;
        console.log(playGuess);

        // Only play if user presses a letter
        if ((playGuess === 'a') || (playGuess === 'b') || (playGuess === 'c') || (playGuess === 'd') || (playGuess === 'e') ||
            (playGuess === 'f') || (playGuess === 'g') || (playGuess === 'h') || (playGuess === 'i') || (playGuess === 'j') ||
            (playGuess === 'k') || (playGuess === 'l') || (playGuess === 'm') || (playGuess === 'n') || (playGuess === 'o') ||
            (playGuess === 'p') || (playGuess === 'q') || (playGuess === 'r') || (playGuess === 's') || (playGuess === 't') ||
            (playGuess === 'u') || (playGuess === 'v') || (playGuess === 'w') || (playGuess === 'x') || (playGuess === 'y') ||
            (playGuess === 'z')) {


            // If user input is correct, replace blank with word

            // If user input is not found in the word, push it to guessed letters and remove a guess left
            if (randSystemFix.indexOf(playGuess) === -1) {
                (guessedLetters.push(playGuess) && guessesLeft--);
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

// -- Bugs --
// 1. Cannot target underline with letter from playGuess
// 2. Duplicate letters can be inputted