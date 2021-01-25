let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random() * 10); // returns a random integer from 0 to 9
};

function getAbsoluteDistance(guess, secretNumber){
    let absoluteValue = Math.abs(guess-secretNumber);
    return absoluteValue;
};

function compareGuesses(humanGuess, computerGuess, secretNumber){
    let humanDistance = getAbsoluteDistance(humanGuess, secretNumber)
    let computerDistance = getAbsoluteDistance(computerGuess, secretNumber)

    if (humanDistance <= computerDistance) {
        return true; //human wins
    } else {
        return false; //computer wins
    }
};

function updateScore(winner){
if (winner === 'human') {
    humanScore++;
} else {
    computerScore++;
}
};

function advanceRound(){
    currentRoundNumber++;
};