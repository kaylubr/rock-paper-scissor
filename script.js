function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);

    if (choice == 1) {
        return "ROCK";
    } else if (choice == 2) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function getHumanChoice() {
    choice = prompt("Choice: ");

    return choice.toUpperCase();
}

console.log(getHumanChoice());