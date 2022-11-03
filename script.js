
function getComputerChoice() {
    // set three options for the computer to choose from
    const compChoices = ["rock", "paper", "scissors"];

    // Randomly generate an index within the length of the array
    const randIndex = Math.floor(Math.random() * compChoices.length);

    // Select the choice at that index
    return compChoices[randIndex];
};

// Compare the players choice to the computers choice
function playRound(userChoice, compChoice) {
    // If both player and user make the same guess
    if (userChoice.toLowerCase() === compChoice) {
        console.log("It's a draw! You both chose " + compChoice);
    }
    // If the user chooses rock
    else if(userChoice.toLowerCase() === "rock") {
        // And the computer chose paper
        if(compChoice === "paper") {
            console.log("You lose! Paper beats rock");
        }
        // Or if the computer chose scissors
        else console.log("You won! Rock beats " + compChoice);
    }
    
    // If the user chooses paper
    else if(userChoice.toLowerCase() === "paper") {
        if (compChoice === "rock") {
            console.log("You won! Paper beats rock");
        }
        else console.log("You lose! scissors beat paper");
    }

    // If the user chooses scissors
    else if(userChoice.toLowerCase === "scissors") {
        if(compChoice === "rock") {
            console.log("You lose! Rock beats scissors");
        }
        else console.log("You won! Scissors beat paper");
    };
};

// Get the computers choice
const compChoice = getComputerChoice();

// ask the user for an input 
const userChoice = prompt("Paper, scissors, or rock?");

playRound(userChoice, compChoice);

// if the input is not rock, paper, or scissors
// tell the user to pick again
// 