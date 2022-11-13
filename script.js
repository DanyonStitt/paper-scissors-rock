
function getComputerChoice() {
    // set three options for the computer to choose from
    const compChoices = ["rock", "paper", "scissors"];

    // Randomly generate an index within the length of the array
    const randIndex = Math.floor(Math.random() * compChoices.length);

    // Select the choice at that index
    return compChoices[randIndex];
};

// Compare the players choice to the computers choice
function getResult(userChoice, compChoice) {
    // If both player and user make the same guess
    if (userChoice.toLowerCase() === compChoice) {
        return "It's a draw! You both chose " + compChoice;
    }
    // If the user chooses rock
    else if(userChoice.toLowerCase() === "rock") {
        if(compChoice === "paper") {return "You lose! Paper beats rock";}
        else return "You won! Rock beats " + compChoice;
    }
    // If the user chooses paper
    else if(userChoice.toLowerCase() === "paper") {
        if (compChoice === "rock") {return "You won! Paper beats rock";}
        else return "You lose! scissors beat paper";
    }
    // If the user chooses scissors
    else if(userChoice.toLowerCase() === "scissors") {
        if(compChoice === "rock") {return "You lose! Rock beats scissors";}
        else return "You won! Scissors beat paper";
    }
    // if the input is not rock, paper, or scissors, tell the user to pick again
    else return "Wrong! Choose either paper, scissors, or rock!";
};


function playRound(playerChoice, computerChoice) {
    let result = getResult(playerChoice, computerChoice);
    gameResult.textContent = result;

    if(result.toLowerCase().includes("you won")) {
        playerScore++;
    } else if(result.toLowerCase().includes("you lose")) {
        computerScore++;
    };

    userScore.textContent = playerScore;
    compScore.textContent = computerScore;
};

function declareWinner() {
    if(playerScore > computerScore) {
        gameResult.textContent = "You won!";
    } else gameResult.textContent = "You lost!";

    
}

let computerScore = 0;
let playerScore = 0;

results = document.querySelector("#results");
const gameResult = document.createElement("div");
gameResult.classList.add("user-choice");
results.appendChild(gameResult);

const userScore = document.createElement("div");
userScore.classList.add("player-score");
results.appendChild(userScore);

const compScore = document.createElement("div");
compScore.classList.add("computer-score");
results.appendChild(compScore);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);

        if(playerScore === 5 || computerScore === 5) {
            declareWinner();
            computerScore = 0;
            playerScore = 0;
        };

    });
});
