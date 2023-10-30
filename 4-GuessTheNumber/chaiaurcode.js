let randomNumber = parseInt(Math.random()*100+1);
console.log(randomNumber);

const submit = document.querySelector('#subt')
submit.style.cursor = 'pointer'
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
startOver.style.cursor = 'pointer'

const p = document.createElement('p')

let prevGuess = []
let numOfGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess = parseInt(userInput.value)
       console.log(guess);
       validateGuess(guess)

    })
}
function validateGuess(guess){
    if(isNaN (guess)){
        alert('please enter a valid number')
    } else if(guess< 1){
        alert('please enter a valid number')
    } else if(guess>100){
        alert('Please enter a number less than 100')

    } else{
        prevGuess.push(guess)
        if(numOfGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber} `)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    
    if(guess === randomNumber){
        displayMessage(`You Guessed it Right`)
        endGame()
    } else if (guess < randomNumber){
        displayMessage(`Number is too low`)
    } else if (guess >randomNumber){
        displayMessage(`Number is too high`)
    }

}

function displayGuess(guess){

    userInput.value = ''
    guessSlot.innerHTML+= `${guess}, `
    numOfGuess++
    remaining.innerHTML = `${11 - numOfGuess} `

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    userInput.setAttribute('placeholder', 'Guess Over')
    p.classList.add('button')
    p.innerHTML = ` <h2 id="newGame">Start New Game</>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess=[]
        numOfGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numOfGuess} `
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

