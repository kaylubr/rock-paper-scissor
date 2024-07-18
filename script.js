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

// console.log(`You win! ${humanChoice} beats $          {computerChoice}`);

// console.log(`You lose! ${computerChoice} beats ${computerChoice}.`);

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
        console.log("Tie!");
    }
}
