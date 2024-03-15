function getComputerChoice() {
    var moves = ["Rock", "Paper", "Scissors"];
    var randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

var randomMove = getComputerChoice();

function singleRound (playerSelection, computerSelection) {

    console.log("You selected", playerSelection.toUpperCase());
    console.log("Computer selected", computerSelection.toUpperCase());
    
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It's a tie! " + playerSelection.toUpperCase() + " ties with " + computerSelection.toUpperCase();
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You Win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase();
    } else {
        return "You Lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase();
    }
}

var oneRound = singleRound("SciSSORS".toLowerCase(), randomMove);

console.log(oneRound);