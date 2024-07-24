let humanScoreCount = 0;
let computerScoreCount = 0;
const humanScore = document.querySelector('#player-one-score');
const computerScore = document.querySelector('#player-ai-score');

const humanChoice = document.querySelector(".choices-container");
const computerChoice = ['rock', 'paper', 'scissor'];    

const resetBtn = document.querySelector('#reset');
const result = document.querySelector("#result");

resetBtn.addEventListener('click', () => {
    humanScoreCount = 0;
    computerScoreCount = 0;
    result.textContent = "";
    humanScore.textContent = `You: ${humanScoreCount}`;
    computerScore.textContent = `Computer: ${computerScoreCount}`;
});

//computer returns rock, paper, scissor 
function getComputerChoice() {
   return computerChoice[Math.floor(Math.random() * 3)];
}

humanChoice.addEventListener("click", (event) => {
    result.textContent = "";
    event.preventDefault();
    let target = event.target;
    let human = target.id;
    let computer = getComputerChoice();

    playRound(human, computer);

    if (humanScoreCount === 5) {
        console.log("You win");
        humanScoreCount = 0;
        computerScoreCount = 0;
        result.textContent = "You won the game!";
        humanScore.textContent = `You: ${humanScoreCount}`;
        computerScore.textContent = `Computer: ${computerScoreCount}`;
    } else if (computerScoreCount === 5) {
        console.log("You lose");
        humanScoreCount = 0;
        computerScoreCount = 0;
        result.textContent = "You lost the game!";
        humanScore.textContent = `You: ${humanScoreCount}`;
        computerScore.textContent = `Computer: ${computerScoreCount}`;
    }
});


function playRound(human, computer) {
    if (human == "rock" && computer === "scissor") {
        console.log(`You win! ${human} beats ${computer}`);
        humanScoreCount++;
        result.textContent = `You win! ${human} beats ${computer}`;
        humanScore.textContent = `You: ${humanScoreCount}`;
    } else if (human == "paper" && computer === "rock") {
        console.log(`You win! ${human} beats ${computer}`);
        humanScoreCount++;
        result.textContent = `You win! ${human} beats ${computer}`;
        humanScore.textContent = `You: ${humanScoreCount}`;
    } else if (human == "scissor" && computer === "paper") {
        console.log(`You win! ${human} beats ${computer}`);
        humanScoreCount++;
        result.textContent = `You win! ${human} beats ${computer}`;
        humanScore.textContent = `You: ${humanScoreCount}`;
    } else if (human == "scissor" && computer === "rock") {
        console.log(`You lose! ${computer} beats ${human}`);
        computerScoreCount++;
        result.textContent = `You lose! ${computer} beats ${human}`;
        computerScore.textContent = `Computer: ${computerScoreCount}`;
    } else if (human == "rock" && computer === "paper") {
        console.log(`You lose! ${computer} beats ${human}`);
        computerScoreCount++;
        result.textContent = `You lose! ${computer} beats ${human}`;
        computerScore.textContent = `Computer: ${computerScoreCount}`;
    } else if (human == "paper" && computer === "scissor") {
        console.log(`You lose! ${computer} beats ${human}`);
        computerScoreCount++;
        result.textContent = `You lose! ${computer} beats ${human}`;
        computerScore.textContent = `Computer: ${computerScoreCount}`;
    } else {
        console.log(`Tie! ${human} is the same with ${computer}`);
        result.textContent = `Tie! ${human} is the same with ${computer}`;

    }
}

