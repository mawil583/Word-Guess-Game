// Definitions:
let wordArr = ["skateboard", "airplane", "yacht", "computer", "travel", "fun", "chair", "science"];
let currentWord = wordArr[Math.floor(Math.random() * wordArr.length)];
let lettersOfWordArr = currentWord.split("");
let alphabetStr = "qwertyuiopasdfghjklzxcvbnm";
let alphabetArr = alphabetStr.split("");
let displayLettersGuessed = document.getElementById("already-guessed");
let winsDisplay = document.getElementById("wins")
let displayWord = document.getElementById("current-word");
let underscores = "";
let underscoresArr = [];
let guessedLetter = "";
let guessedLetters = [];
let wins = 0;
let guessLeft = 13;
winsDisplay.textContent = "Wins: " + wins;

// this loop makes letter blanks
for (let i = 0; i < currentWord.length; i++) {
    underscores = underscores + "_ ";
    underscoresArr = underscores.split(" ");
    displayWord.textContent = underscores;
}

// This function handles key events 
document.onkeyup = function (event) {
    let userGuess = event.key;
    let guessedLetter = userGuess;

    // This checks to see if they key pressed is a letter of the alphabet
    if (alphabetArr.indexOf(guessedLetter) >= 0) {

        // this makes sure the user can't guess the same letter more than once
        if (guessedLetters.indexOf(guessedLetter) >= 0) {
            alert("You've already guessed '" + userGuess + "'. Try a different letter.")
        }
        // This logic appends every guess to alreadyguessedarr and updates remaining guesses
        else {
            guessedLetters.push(guessedLetter);
            displayLettersGuessed.textContent = guessedLetters;
            guessLeft--;
            document.getElementById("remaining-guesses").innerHTML = guessLeft;
        }

        // This takes user input and puts character in correct position
        if (guessLeft > 0) {
            for (let i = 0; i < lettersOfWordArr.length; i++) {
                if (guessedLetter === lettersOfWordArr[i]) {
                    underscoresArr.splice(i, 1, guessedLetter);
                    displayWord.textContent = underscoresArr.join(" ");
                }
            }
            // This displays game over and updates values accordingly
        } else {
            document.getElementById("remaining-guesses").innerHTML = guessLeft;
            wins++;
            guessLeft--;
            winsDisplay;        
            alert('GAME OVER! The word was "' + currentWord + '."');
            reset();
        }
    }
    // This displays that user won and then resets the game
    if (underscoresArr.includes("_") === false) {
        wins++;
        winsDisplay.textContent = "Wins: " + wins;
        setTimeout(function () {
            alert("You Won!");
        })
        reset();
    }
}

// This resets all values for a brand new word
function reset() {
    guessLeft = 13;
    displayLettersGuessed.textContent = "";
    underscores = "";
    displayWord.textContent = "";
    currentWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    console.log(currentWord)
    lettersOfWordArr = currentWord.split("");
    for (let i = 0; i < currentWord.length; i++) {
        underscores = underscores + "_ ";
        underscoresArr = underscores.split(" ");
        displayWord.textContent = underscores;
    }
    lettersOfWordArr = currentWord.split("");
    document.getElementById("remaining-guesses").innerHTML = guessLeft;
    guessedLetters = [];
}