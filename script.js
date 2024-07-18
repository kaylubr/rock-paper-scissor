let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);

    if (choice == 1) {
        return "rock";
    } else if (choice == 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    choice = prompt("Choice: ");

    return choice.toLowerCase();
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