let randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('#userInput');
const submitButton = document.querySelector('#btn');
const guessSlot = document.querySelector('.Guesses')
const remainingSlot = document.querySelector('.LastResult')
const lowHi = document.querySelector('.LowHi')
const startOver = document.querySelector('.ResultPara')

const p = document.createElement('p');

let prevguess = [];
let numOfGuesses = 1;
let playGame = true;
if (playGame) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
       const guess = parseInt(userInput.value);
       validateGuess(guess);
    })
}
//-----------------------creating Methods----------------------------------------

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`please enter a valid number`);
    }
    else if (guess <= 0) {
        alert(`please enter number biiger than zero`);
    }
    else if (guess > 100) {
        alert(`please enter number 100 or less`);
    }
    else {
        prevguess.push(guess);
        if (numOfGuesses === 10) {
            cleanupGuess(guess);
            lowHi.style.color = 'red'
            displayMessage(`Game Over, The Number was ${randomNumber}`);
            endGame();
        }
        else {
            cleanupGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        lowHi.style.color = '#3cff2e'
        displayMessage(`You Won! You Guessed it Right`)
        endGame();
    }
    else if (guess > randomNumber) {
        lowHi.style.color = 'red'
        displayMessage(`Number High Please Enter Lower Number`)
    }
    else if (guess < randomNumber) {
        lowHi.style.color = 'red'
        displayMessage(`Number is Low Please Enter Higher Number`)
    }
}

function cleanupGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} : `;
    numOfGuesses++;
    remainingSlot.innerHTML = `${11 - numOfGuesses}`;
}

function displayMessage(message) {
    lowHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<input type="submit" id="newGame" value="Start Again" class="button">`;
    startOver.appendChild(p);
    playgame = false;
    newGame();
}

function newGame() {
    newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numOfGuesses = 1;
        guessSlot.innerHTML = '';
        remainingSlot.innerHTML = `${11 - numOfGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        displayMessage('');
        playGame = true;
    })
}

