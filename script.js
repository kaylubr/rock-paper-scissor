let humanScoreCount = 0;
let computerScoreCount = 0;
const humanScore = document.querySelector('#player-one-score');
const computerScore = document.querySelector('#player-ai-score');

const humanChoice = document.querySelector(".choices-container");
const computerChoice = ['rock', 'paper', 'scissor'];    

const resetBtn = document.querySelector('#reset')

resetBtn.addEventListener('click', () => {
    humanScoreCount = 0;
    computerScoreCount = 0;
});

//computer returns rock, paper, scissor 
function getComputerChoice() {
   return computerChoice[Math.floor(Math.random() * 3)];
}

humanChoice.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;
    let human = target.id;
    let computer = getComputerChoice();

    playRound(human, computer);
});


function playRound(human, computer) {
    if (human == "rock" && computer === "scissor") {
        console.log(`You win! ${human} beats ${computer}`);
        humanScoreCount++;
    } else if (human == "paper" && computer === "rock") {
        console.log(`You win! ${human} beats ${computer}`);
        humanScoreCount++;
    } else if (human == "scissor" && computer === "paper") {
        console.log(`You win! ${human} beats ${computer}`);
        humanScoreCount++;
    } else if (human == "scissor" && computer === "rock") {
        console.log(`You lose! ${computer} beats ${human}`);
        computerScoreCount++;
    } else if (human == "rock" && computer === "paper") {
        console.log(`You lose! ${computer} beats ${human}`);
        computerScoreCount++;
    } else if (human == "paper" && computer === "scissor") {
        console.log(`You lose! ${computer} beats ${human}`);
        computerScoreCount++;
    } else {
        console.log(`Tie! ${human} is the same with ${computer}`);
    }
}

