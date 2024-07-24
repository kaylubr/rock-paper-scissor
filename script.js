let humanScoreCount = 0;
let computerScoreCount = 0;

const humanScore = document.querySelector('#player-one-score');
const computerScore = document.querySelector('#player-ai-score');
const computer_choice = ['rock', 'paper', 'scissor'];
const humanChoice = document.querySelector(".choices-container");
const resetBtn = document.querySelector('#reset')

humanChoice.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            console.log('rock clicked');
            break;
        case 'paper':
            console.log('paper clicked');
            break;
        case 'scissor':
            console.log('scissor clicked');
            break;
    }
});

resetBtn.addEventListener('click', () => {
    humanScoreCount = 0;
    computerScoreCount = 0;
});


function getComputerChoice() {
   return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else {
        console.log(`Tie! ${humanChoice} is the same with ${computerChoice}`);
    }
}


function playGame() {
    for (let index = 0; index < 5; index++) {
        const human = getHumanChoice();
        const computer = getComputerChoice();

        playRound(human, computer);
    }

    if (humanScore > computerScore) {
        console.log("You won gang");
    } else if (computerScore > humanScore) {
        console.log("You lost the game! lol, what a loser");
    } else {
        console.log("Tie, boring..")
    }
}

playGame();