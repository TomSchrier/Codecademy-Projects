//validate user input
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        console.log("valid input");
        return userInput;
    } else {
        console.log("error. no valid input");
    }
}

//generate computor guess
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

//compare user input and generated computer guess
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "tie";
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
}

console.log(determineWinner('paper', getComputerChoice()));
console.log(determineWinner('scissors', getComputerChoice()));
console.log(determineWinner('rock', getComputerChoice()));