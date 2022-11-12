
function getComputerChoice() {
    // set three options for the computer to choose from
    const compChoices = ["rock", "paper", "scissors"];

    // Randomly generate an index within the length of the array
    const randIndex = Math.floor(Math.random() * compChoices.length);
    console.log(compChoices[randIndex]);

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


function playGame(e) {
    let userChoice = e.target.id;
    console.log(userChoice)
    let compChoice = getComputerChoice();
    print(compChoice)
    playRound(userChoice, compChoice);
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", playGame);

// console.log(buttons);

// game()



// 
// 