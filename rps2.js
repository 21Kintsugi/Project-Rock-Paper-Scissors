function getComputerChoice() {
    var moves = ["Rock", "Paper", "Scissors"];
    var randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

var randomMove = getComputerChoice();

function singleRound (playerSelection, computerSelection) {

    console.log("You selected", playerSelection.toUpperCase());
    console.log("Computer selected", computerSelection.toUpperCase());
    
    if (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "scissors" && playerSelection.toLowerCase() !== "paper") {
        return "This is an invalid input! Please enter either Rock, Paper, or Scissors."
    }
    else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It's a tie! " + playerSelection.toUpperCase() + " ties with " + computerSelection.toUpperCase();
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You Win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase();
    } else {
        return "You Lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase();
    }
}

function playRound() {
    var playerChoice = document.getElementById("player-choice").value.trim().toLowerCase();
    var computerChoice = getComputerChoice();

    var roundResult = singleRound(playerChoice, computerChoice)
    
    var resultText = document.getElementById("result");
    var computerChoiceDisplay = document.getElementById("computer-choice");
    resultText.textContent = roundResult;

    

    resultText.textContent = roundResult;
    computerChoiceDisplay.textContent = computerChoice;
}