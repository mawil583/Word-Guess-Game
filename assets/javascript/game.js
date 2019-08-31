let wordArr = ["skateboard", "airplane", "yacht", "computer", "travel", "fun"];
let displayWord = document.getElementById("current-word");
let displayLetter = document.getElementById("already-guessed")
let underscores = "";
let currentWord = wordArr[Math.floor(Math.random() * wordArr.length)];
let letterArr = currentWord.split("")
console.log(letterArr);
let guessedLetter = [];
let correctGuessedLetter = [];
let wins = 0;
let guessLeft = 13;
// Math.floor() rounds to the nearest integer
// Math.random() chooses a random number between 0 and 1. If I want to,
// specify a range, then I multiply Math.random() by a range I want to
// set- in this case the range is the length of my word
console.log(currentWord);

for (let i = 0; i < currentWord.length; i++) {
    underscores = underscores + "_ "
    displayWord.textContent = underscores;
}
document.onkeyup = function remainingLetters(event) {
    let userGuess = event.key;
    displayLetter.textContent = guessedLetter.push(userGuess);
    // guessedLetter.push(userGuess);
    guessLeft--
    console.log("guessedLetter" + " "  + letterArr);
    console.log("guessedLetter" + " " + guessedLetter);
    document.getElementById("remaining-guesses").innerHTML = guessLeft; 

    if (guessLeft > 0){
        function updateGuess(){
            document.getElementById("current-word").innerHTML = correctGuessedLetter;
        }
    
        for (let i = 0; i < letterArr.length; i++) {
            if (guessedLetter == letterArr[i]) {
                if (correctGuessedLetter.indexOf(guessedLetter) === -1) {
                    correctGuessedLetter.push(guessedLetter);
                }
                correctGuessedLetter.filter((item,guessedLetter) => correctGuessedLetter.indexOf(guessedLetter))
                updateGuess();
                console.log("clicked on correct letter");
            }
        }
    } else {
        
    }

    
}
// function alreadyGuessed(guess) {
//     letterGuess.textContent 
// }
// for (let i = 0; i < word.length; i++) {};