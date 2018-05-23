// Variables
var letters = "abcdefghijklmnopqrstuvwxyz";
var guessedLetters = [];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var gameSystems = ['NES', 'SNES', 'Genesis', 'PlayStation', 'Dreamcast', 'GameBoy', 'XBOX', 'Wii', 'PSP', 'Atari', 'Switch', 'Pong', 'Coleco', 'Vectrex', 'WonderSwan', 'Nuon', 'HyperScan', 'Microvision', 'Colorvision', 'Nomad', 'Neogeo', 'GBA', 'DS', 'Gizmondo', 'Vita', 'Shield'];
var blank = [];
var randSystem;

// Functions that updates wins, current word, losses, guessesleft, guessedletters
function updateWins() {
    document.querySelector("#wins").innerHTML = "<b>Wins: </b>" + wins;
}

function currentWord() {
    document.querySelector("#currentWord").innerHTML = blank.join(" ");
}

function updateLosses() {
    document.querySelector("#losses").innerHTML = "<b>Losses: </b>" + losses;
}

function updateGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "<b>Guesses Left: </b>" + guessesLeft;
}

function updateGuessedLetters() {
    document.querySelector("#guessedLetters").innerHTML = "<b>Letters you have guessed: </b>" + guessedLetters.join(' ') + " ";
}

function restartWord() {
    blank.splice(0, blank.length);
}

// Restart Game
function restartGame() {
    guessesLeft = 10;
    guessedLetters = [];
    updateGuessesLeft();
    updateGuessedLetters();
    currentWord();
}

// Initializers
renderSystem();
currentWord();
updateWins();
updateLosses();
updateGuessesLeft();
updateGuessedLetters();
restartGame();

function renderSystem() {

    // Computer chooses random game console
    var randSystem = gameSystems[Math.floor(Math.random() * gameSystems.length)];

    // Converts game console to lower case
    var randSystemFix = randSystem.toLowerCase();

    // Computer outputs blank areas for current word
    for (var i = 0; i < randSystemFix.length; i++) {
        blank.push("_");
    }

    // Player chooses letter
    document.onkeyup = function(event) {
        var playGuess = event.key;

        // Only play if user presses a letter
        if (letters.indexOf(playGuess) > -1) {

            // If user input is correct, replace blank with word
            for (var i = 0; i < randSystemFix.length; i++) {
                if (playGuess === randSystemFix.charAt(i)) {
                    blank.splice(i, 1, playGuess);
                    document.querySelector("#currentWord").innerHTML = blank.join(" ");
                }
            }

            // If user correctly guesses all letters, mark as win and restart game
            if (blank.join("") === randSystemFix) {
                alert("You Win! :D");
                wins++;
                updateWins();
                restartWord();
                renderSystem();
                restartGame();
                currentWord();
            }

            // If user input is not found in the word, push it to guessed letters and remove a guess left
            if (randSystemFix.indexOf(playGuess) === -1 && guessedLetters.indexOf(playGuess) === -1) {
                (guessedLetters.push(playGuess) && guessesLeft--);
                updateGuessesLeft();
                updateGuessedLetters();
            }

            // If player exhausts all guesses, mark as a loss and restart
            if (guessesLeft == 0) {
                alert("You lose. :(");
                losses++;
                updateLosses();
                restartWord();
                renderSystem();
                restartGame();
                currentWord();
            }

        }

    }
}