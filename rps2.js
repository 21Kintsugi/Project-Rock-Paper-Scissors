function getComputerChoice() {
    var moves = ["Rock", "Paper", "Scissors"];
    var randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

var randomMove = getComputerChoice();

function singleRound (playerSelection, computerSelection) {

    console.log("You selected", playerSelection.toUpperCase());
    console.log("Computer selected", computerSelection.toUpperCase());
    
    if (playerSelection === computerSelection) {
        return "It's a tie! " + playerSelection.toUpperCase() + " ties with " + computerSelection.toUpperCase();
    } else if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase();
    } else {
        return "You Lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase();
    }

}