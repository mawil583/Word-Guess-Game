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
let guessLeft = 13;

// Math.floor() rounds to the nearest integer
// Math.random() chooses a random number between 0 and 1. If I want to,
// specify a range, then I multiply Math.random() by a range I want to
// set- in this case the range is the length of my word
console.log(currentWord);

for (let i = 0; i < currentWord.length; i++) {
    underscores = underscores + "_";
    //underscores = underscores + "_ ";
    underscoresArr = underscores.split("");
    console.log(underscoresArr);
    displayWord.textContent = underscores;
}
// function updateGuess(){
//     document.getElementById("current-word").innerHTML = correctGuessedLetter;
// }
document.onkeyup = function (event) {
    let userGuess = event.key;
    let guessedLetter = userGuess;

    if (guessedLetters.includes(userGuess)) {
        // the line below guessedLetters holds each of the user's guesses
        guessedLetters = guessedLetters;
        displayLetter.textContent = guessedLetters;
    }
    else {
        guessedLetters = guessedLetters + userGuess;
        displayLetter.textContent = guessedLetters;
    }


    // the line below displays each of the users guesses
    displayLetter.textContent = guessedLetters;
    // guessedLetter.push(userGuess);
    guessLeft--
    console.log("guessedLetter: "  + guessedLetter);
    console.log("guessedLetters" + " " + guessedLetters);

    document.getElementById("remaining-guesses").innerHTML = guessLeft; 

    if (guessLeft > 0){
    
        for (let i = 0; i < letterArr.length; i++) {
            if (guessedLetter === letterArr[i]) {
                console.log(guessedLetter);
                underscoresArr.splice(i, 1, guessedLetter);
                console.log(underscoresArr);
                displayWord.textContent = underscoresArr;
            }
        }
    } else {
        alert("GAME OVER!")        
    }    
}
// function alreadyGuessed(guess) {
//     letterGuess.textContent 
// }
// for (let i = 0; i < word.length; i++) {};

/* Take out displayWord.textContent = underscores; from line 26 and make an html div with a 
 different ID (id="underscores"), and do a getelementbyid("underscores"), like i did on line 41 
 */