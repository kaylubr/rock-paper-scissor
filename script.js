let humanScoreCount = 0;
let computerScoreCount = 0;
const humanScore = document.querySelector('#player-one-score');
const computerScore = document.querySelector('#player-ai-score');

//reference for the choices 
const humanChoice = document.querySelector(".choices-container");
const computerChoice = ['rock', 'paper', 'scissor'];    

const resetBtn = document.querySelector('#reset');

//reference for the result status 
const result = document.querySelector("#result");

//reference for the two big output containers
const playerOutput = document.querySelector(".playerOne");
const computerOutput = document.querySelector(".playerAI");

//reference for the images
const rockImage = document.querySelector("#rock");
const paperImage = document.querySelector("#paper");
const scissorImage = document.querySelector("#scissor");
const winnerImage = document.createElement("img");
winnerImage.src = "./img/happy-1-svgrepo-com.svg";
winnerImage.classList.add("image-clone");
const loserImage = document.createElement("img");
loserImage.src = "./img/cry-svgrepo-com.svg";
loserImage.classList.add("image-clone");

//cloning the images
const rockImageClone = rockImage.cloneNode(true);
const paperImageClone = paperImage.cloneNode(true);
const scissorImageClone = scissorImage.cloneNode(true);
rockImageClone.classList.add("image-clone");
paperImageClone.classList.add("image-clone");
scissorImageClone.classList.add("image-clone");

//event handler for reset button
resetBtn.addEventListener('click', () => {
    playerOutput.innerHTML = "";
    computerOutput.innerHTML = "";
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

        //showing the output for the winner or loser
        humanScore.textContent = `You: ${humanScoreCount}`;
        computerScore.textContent = `Computer: ${computerScoreCount}`;

        playerOutput.innerHTML = "";
        computerOutput.innerHTML = "";
        playerOutput.appendChild(winnerImage);
        computerOutput.appendChild(loserImage);
    } 
    
    else if (computerScoreCount === 5) {
        console.log("You lose");
        humanScoreCount = 0;
        computerScoreCount = 0;
        result.textContent = "You lost the game!";

        //showing the output for the winner or loser
        humanScore.textContent = `You: ${humanScoreCount}`;
        computerScore.textContent = `Computer: ${computerScoreCount}`;

        playerOutput.innerHTML = "";
        computerOutput.innerHTML = "";
        playerOutput.appendChild(loserImage);
        computerOutput.appendChild(winnerImage);
    }
});


function playRound(human, computer) {
    playerOutput.innerHTML = "";
    computerOutput.innerHTML = "";

    if (human == "rock" && computer === "scissor") {
        console.log(`You win! ${human} beats ${computer}`);

        humanScoreCount++;
        result.textContent = `You win! ${human} beats ${computer}`;
        humanScore.textContent = `You: ${humanScoreCount}`;

        playerOutput.appendChild(rockImageClone);
        computerOutput.appendChild(scissorImageClone);
    } 
    
    else if (human == "paper" && computer === "rock") {
        console.log(`You win! ${human} beats ${computer}`);

        humanScoreCount++;
        result.textContent = `You win! ${human} beats ${computer}`;
        humanScore.textContent = `You: ${humanScoreCount}`;

        playerOutput.appendChild(paperImageClone);
        computerOutput.appendChild(rockImageClone);
    } 
    
    else if (human == "scissor" && computer === "paper") {
        console.log(`You win! ${human} beats ${computer}`);
        humanScoreCount++;
        result.textContent = `You win! ${human} beats ${computer}`;
        humanScore.textContent = `You: ${humanScoreCount}`;

        playerOutput.appendChild(scissorImageClone);
        computerOutput.appendChild(paperImageClone);
    } 
    
    else if (human == "scissor" && computer === "rock") {
        console.log(`You lose! ${computer} beats ${human}`);

        computerScoreCount++;
        result.textContent = `You lose! ${computer} beats ${human}`;
        computerScore.textContent = `Computer: ${computerScoreCount}`;

        playerOutput.appendChild(scissorImageClone);
        computerOutput.appendChild(rockImageClone);
    } 
    
    else if (human == "rock" && computer === "paper") {
        console.log(`You lose! ${computer} beats ${human}`);

        computerScoreCount++;
        result.textContent = `You lose! ${computer} beats ${human}`;
        computerScore.textContent = `Computer: ${computerScoreCount}`;

        playerOutput.appendChild(rockImageClone);
        computerOutput.appendChild(paperImageClone);
    } 
    
    else if (human == "paper" && computer === "scissor") {
        console.log(`You lose! ${computer} beats ${human}`);

        computerScoreCount++;
        result.textContent = `You lose! ${computer} beats ${human}`;
        computerScore.textContent = `Computer: ${computerScoreCount}`;

        playerOutput.appendChild(paperImageClone);
        computerOutput.appendChild(scissorImageClone);
    } 
    
    else {
        console.log(`Tie! ${human} is the same with ${computer}`);
        result.textContent = `Tie! ${human} is the same with ${computer}`;

        switch(human) {
            case 'rock':
                playerOutput.appendChild(rockImageClone);
                computerOutput.appendChild(rockImageClone.cloneNode(true));
                break;
            case 'paper':
                playerOutput.appendChild(paperImageClone);
                computerOutput.appendChild(paperImageClone.cloneNode(true));
                break;
            case 'scissor':
                playerOutput.appendChild(scissorImageClone);
                computerOutput.appendChild(scissorImageClone.cloneNode(true));
                break;    
        }
    }
}

