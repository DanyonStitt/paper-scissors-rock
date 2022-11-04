
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
        return "It's a draw! You both chose " + compChoice;
    }
    // If the user chooses rock
    else if(userChoice.toLowerCase() === "rock") {
        if(compChoice === "paper") {return "You lose! Paper beats rock";}
        else return "You won! Rock beats " + compChoice;
    }
    // If the user chooses paper
    else if(userChoice.toLowerCase() === "paper") {
        if (compChoice === "rock") {"You won! Paper beats rock";}
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

function game() {
    // Set a counter for the number of wins and loses
    let wins = 0;
    let loses = 0;
    alert("Playing best of 5 games");
    // Play 5 rounds of the game
    for (let i = 0; i < 5; i++) {
        // Get the computers choice
        const compChoice = getComputerChoice();
        // ask the user for an input 
        const userChoice = prompt("Paper, scissors, or rock?");
        // Play the game
        let gameResult = playRound(userChoice, compChoice);
        console.log(gameResult);
        if (gameResult.toLowerCase().includes("you win!")) {
            wins = wins + 1;
        }
        else if (gameResult.toLowerCase().includes("you lose!")) {
            loses = loses + 1
        };
        console.log(gameResult)
    };
    // showing the final winner
    if (wins > loses) {
        console.log("Well done! you won " + wins + " to " + loses);
    }
    else if (loses > wins) {
        console.log("Haha! I win " + loses + " to " + wins);
    }
    else console.log("Play me again!");
}


game()



// 
// 