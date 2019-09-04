// Definitions:
let wordArr = ["proton", "velocity", "mass", "energy", "atom", "compound", "momentum", "science"];
let currentWord = wordArr[Math.floor(Math.random() * wordArr.length)];
let lettersOfWordArr = currentWord.split("");
let alphabetStr = "qwertyuiopasdfghjklzxcvbnm";
let alphabetArr = alphabetStr.split("");
let displayLettersGuessed = document.getElementById("already-guessed");
let winsDisplay = document.getElementById("wins")
let displayWord = document.getElementById("current-word");
let imageTag = document.createElement("img");
let audioTag = document.createElement("source");
console.log(currentWord);
let underscores = "";
let underscoresArr = [];
let guessedLetter = "";
let guessedLetters = [];
let wins = 0;
let guessLeft = 13;
winsDisplay.textContent = "Wins: " + wins;
let proton = new Audio('./assets/images/proton.wav');
let velocity = new Audio("./assets/images/velocity.wav");
let mass = new Audio("./assets/images/mass.wav")
let energy = new Audio("./assets/images/energy.wav")
let atom = new Audio("./assets/images/atom.wav")
let compound = new Audio("./assets/images/compound.mp3")
let science = new Audio("./assets/images/science.wav")

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
    console.log(underscoresArr.includes("_"))

    // This checks to see if they key pressed is a letter of the alphabet
    if (alphabetArr.indexOf(guessedLetter) >= 0) {

        // this makes sure the user can't guess the same letter more than once
        if (guessedLetters.indexOf(guessedLetter) >= 0) {
            alert("You've already guessed '" + userGuess + "'. Try a different letter.")
        }

        else {
            guessLeft--;
            document.getElementById("remaining-guesses").innerHTML = guessLeft;
            // this fills in the blanks when a user guesses a correct letter
            for (let i = 0; i < lettersOfWordArr.length; i++) {
                // if the user guesses a correct letter 
                if (guessedLetter === lettersOfWordArr[i]) {
                    underscoresArr.splice(i, 1, guessedLetter);
                    displayWord.textContent = underscoresArr.join(" ");
                }
            }
            if (guessLeft === 0 && underscoresArr.includes("_") === false) {
                wins++;
                winsDisplay.textContent = "Wins: " + wins;
                alert("You Won!");

                if (currentWord === wordArr[0]) {
                    imageTag.setAttribute("src", "./assets/images/proton.png")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    proton.play();
                    reset();
                }
                else if (currentWord === wordArr[1]) {
                    imageTag.setAttribute("src", "./assets/images/velocity.jpg")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    velocity.play();
                    reset();
                } else if (currentWord === wordArr[2]) {
                    imageTag.setAttribute("src", "./assets/images/mass.jpg")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    mass.play();
                    reset();
                } else if (currentWord === wordArr[3]) {
                    imageTag.setAttribute("src", "./assets/images/energy.png")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    energy.play();
                    reset();
                } else if (currentWord === wordArr[4]) {
                    imageTag.setAttribute("src", "./assets/images/atom.png")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    atom.play();
                    reset();
                } else if (currentWord === wordArr[5]) {
                    imageTag.setAttribute("src", "./assets/images/compound.png")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    compound.play();
                    reset();
                } else if (currentWord === wordArr[6]) {
                    imageTag.setAttribute("src", "./assets/images/momentum.png")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    velocity.play();
                    reset();
                } else if (currentWord === wordArr[7]) {
                    imageTag.setAttribute("src", "./assets/images/Science.png")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    science.play();
                    reset();
                }
                
                reset();
            }
            
            else if (guessLeft === 0) {
                
                alert('GAME OVER! The word was "' + currentWord + '."');
                reset();
            }


            else if (underscoresArr.includes("_")) {
                guessedLetters.push(guessedLetter);
                displayLettersGuessed.textContent = guessedLetters;
                document.getElementById("remaining-guesses").innerHTML = guessLeft;
            }
            else if (underscoresArr.includes("_") === false) {
                wins++;
                winsDisplay.textContent = "Wins: " + wins;
                alert("You Won!");

                if (currentWord === wordArr[0]) {
                    imageTag.setAttribute("src", "./assets/images/proton.png")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    proton.play();
                    reset();
                }
                else if (currentWord === wordArr[1]) {
                    imageTag.setAttribute("src", "./assets/images/velocity.jpg")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    velocity.play();
                    reset();
                } else if (currentWord === wordArr[2]) {
                    imageTag.setAttribute("src", "./assets/images/mass.jpg")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    mass.play();
                    reset();
                } else if (currentWord === wordArr[3]) {
                    imageTag.setAttribute("src", "./assets/images/energy.png")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    energy.play();
                    reset();
                } else if (currentWord === wordArr[4]) {
                    imageTag.setAttribute("src", "./assets/images/atom.png")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    atom.play();
                    reset();
                } else if (currentWord === wordArr[5]) {
                    imageTag.setAttribute("src", "./assets/images/compound.png")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    compound.play();
                    reset();
                } else if (currentWord === wordArr[6]) {
                    imageTag.setAttribute("src", "./assets/images/momentum.png")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    velocity.play();
                    reset();
                } else if (currentWord === wordArr[7]) {
                    imageTag.setAttribute("src", "./assets/images/Science.png")
                    document.getElementById("imageDiv").appendChild(imageTag);
                    science.play();
                    reset();
                }
                // setTimeout(function () {
                //     alert("You Won!");
                // })
                reset();
            }




        }
    }


    // else if (underscoresArr.includes("_") === false) {
    //     wins++;
    //     winsDisplay.textContent = "Wins: " + wins;
    //     alert("You Won!");
    //     if (currentWord === wordArr[0]) {
    //         imageTag.setAttribute("src", "./assets/images/proton.png")
    //         document.getElementById("imageDiv").appendChild(imageTag);
    //     }
    //     else if (currentWord === wordArr[1]) {
    //         imageTag.setAttribute("src", "./assets/images/velocity.jpg")
    //         document.getElementById("imageDiv").appendChild(imageTag);
    //     } else if (currentWord === wordArr[2]) {
    //         imageTag.setAttribute("src", "./assets/images/mass.jpg")
    //         document.getElementById("imageDiv").appendChild(imageTag);
    //     } else if (currentWord === wordArr[3]) {
    //         imageTag.setAttribute("src", "./assets/images/energy.png")
    //         document.getElementById("imageDiv").appendChild(imageTag);
    //     } else if (currentWord === wordArr[4]) {
    //         imageTag.setAttribute("src", "./assets/images/atom.png")
    //         document.getElementById("imageDiv").appendChild(imageTag);
    //     } else if (currentWord === wordArr[5]) {
    //         imageTag.setAttribute("src", "./assets/images/compound.png")
    //         document.getElementById("imageDiv").appendChild(imageTag);
    //     } else if (currentWord === wordArr[6]) {
    //         imageTag.setAttribute("src", "./assets/images/momentum.png")
    //         document.getElementById("imageDiv").appendChild(imageTag);
    //     } else if (currentWord === wordArr[7]) {
    //         imageTag.setAttribute("src", "./assets/images/Science.png")
    //         document.getElementById("imageDiv").appendChild(imageTag);
    //     }
    //     // setTimeout(function () {
    //     //     alert("You Won!");
    //     // })
    //     reset();
    // }


}

// if there are no more guesses left and if there are no underscores left in array

// if there are no underscores left




// This logic appends every guess to alreadyguessedarr and updates remaining guesses
// This takes user input and puts character in correct position

// This displays game over and updates values accordingly




// This displays that user won and then resets the game



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