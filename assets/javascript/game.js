// Definitions:
let wordArr = ["skateboard", "airplane", "yacht", "computer", "travel", "fun", "chairs"];
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
    console.log(underscoresArr);
    displayWord.textContent = underscores;
}

// This function handles key events and counts guesses in the "Letters already guessed"
document.onkeyup = function (event) {
    let userGuess = event.key;
    let guessedLetter = userGuess;

    if (alphabetArr.indexOf(guessedLetter) >= 0) {



        if (guessedLetters.indexOf(guessedLetter) >= 0) {
            // this makes sure the user can't guess the same letter more than once
            alert("You've already guessed '" + userGuess + "'. Try a different letter.")
        }
        else {
            // This logic appends every guess to Letters Already Guessed
            guessedLetters.push(guessedLetter);
            console.log(guessedLetters);
            console.log(typeof (guessedLetters));
            displayLettersGuessed.textContent = guessedLetters;
            guessLeft--;
        }

        // the line below displays each of the users guesses
        displayLettersGuessed.textContent = guessedLetters;

        console.log("guessedLetter: " + guessedLetter);
        console.log("guessedLetters" + " " + guessedLetters);

        // below updates the guesses left to the browser
        document.getElementById("remaining-guesses").innerHTML = guessLeft;

        if (guessLeft > 0) {

            for (let i = 0; i < lettersOfWordArr.length; i++) {

                if (guessedLetter === lettersOfWordArr[i]) {
                    console.log(guessedLetter);
                    underscoresArr.splice(i, 1, guessedLetter);

                    console.log(underscoresArr);
                    displayWord.textContent = underscoresArr.join(" ");
                }
            }
        } else {

            document.getElementById("remaining-guesses").innerHTML = guessLeft;
            wins++;
            winsDisplay;
            alert('GAME OVER! The word was "' + currentWord + '."');
            reset();
        }
        if (underscoresArr.includes("_") === false) {
            wins++;
            winsDisplay.textContent = "Wins: " + wins;
            setTimeout(function () {
                alert("You Won!");
            })
            reset();
        }
    }
}

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
        console.log(underscores)
        underscoresArr = underscores.split(" ");
        console.log(underscoresArr);
        displayWord.textContent = underscores;
    }
    lettersOfWordArr = currentWord.split("");
    document.getElementById("remaining-guesses").innerHTML = guessLeft;
    guessedLetters = [];
}


