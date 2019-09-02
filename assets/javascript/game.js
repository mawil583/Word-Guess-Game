let wordArr = ["skateboard", "airplane", "yacht", "computer", "travel", "fun"];
let displayWord = document.getElementById("current-word");
let displayLetter = document.getElementById("already-guessed");
let underscores = "";
let underscoresArr = [];
let currentWord = wordArr[Math.floor(Math.random() * wordArr.length)];
let letterArr = currentWord.split("");
console.log(letterArr);
let guessedLetter = "";
let guessedLetters = "";
let correctGuessedLetter = [];
let wins = 0;
let winsDisplay = document.getElementById("wins")
winsDisplay.textContent = "Wins: " + wins;
// document.getElementById("wins").textContent = "Wins: " + wins;
let guessLeft = 13;


function reset() {
    guessLeft = 13;
    displayLetter.textContent = "";
    underscores = "";
    displayWord.textContent = "";
    currentWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    console.log(currentWord)
    letterArr = currentWord.split("");
    for (let i = 0; i < currentWord.length; i++) {
        underscores = underscores + "_";
        console.log(underscores)
        underscoresArr = underscores.split("");
        console.log(underscoresArr);
        displayWord.textContent = underscores;
    }

    letterArr = currentWord.split("");
    document.getElementById("remaining-guesses").innerHTML = guessLeft;
    guessedLetters = "";
}

// Math.floor() rounds to the nearest integer
// Math.random() chooses a random number between 0 and 1. If I want to,
// specify a range, then I multiply Math.random() by a range I want to
// set- in this case the range is the length of my word
console.log(currentWord);

// this function makes letter blanks
for (let i = 0; i < currentWord.length; i++) {
    underscores = underscores + "_";
    underscoresArr = underscores.split("");
    console.log(underscoresArr);
    displayWord.textContent = underscores;
}


// This function handles key events and counts guesses in the "Letters already guessed"
document.onkeyup = function (event) {
    let userGuess = event.key;
    let guessedLetter = userGuess;

    if (guessedLetters.includes(userGuess)) {
        // the line below guessedLetters holds each of the user's guesses
        guessedLetters = guessedLetters;
        displayLetter.textContent = guessedLetters;
        alert("You've already guessed '" + userGuess + "'. Try a different letter.")
    }
    else {
        guessedLetters = guessedLetters + userGuess;
        displayLetter.textContent = guessedLetters;
        guessLeft--;
    }

    
    // the line below displays each of the users guesses
    displayLetter.textContent = guessedLetters;
    
    console.log("guessedLetter: " + guessedLetter);
    console.log("guessedLetters" + " " + guessedLetters);

    // below updates the guesses left to the browser
    document.getElementById("remaining-guesses").innerHTML = guessLeft;
    

    if (guessLeft > 0) {
        
        for (let i = 0; i < letterArr.length; i++) {
            
            if (guessedLetter === letterArr[i]) {
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
        alert("GAME OVER!");
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
// function alreadyGuessed(guess) {
//     letterGuess.textContent 
// }
// for (let i = 0; i < word.length; i++) {};

/* Take out displayWord.textContent = underscores; from line 26 and make an html div with a
different ID (id="underscores"), and do a getelementbyid("underscores"), like i did on line 41
 */

// var x = "3" + 1;
// console.log(x);
// console.log(typeof(x));
// above code outputs: 31
// type is string

// var x = "3" - 1;
// console.log(x);
// console.log(typeof(x));
// above code outputs: 2
// type is number



