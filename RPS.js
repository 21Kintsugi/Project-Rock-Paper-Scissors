function getComputerChoice() {
    var moves = ["Rock", "Paper", "Scissors"];
    var randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

var randomMove = getComputerChoice();
/* console.log("Computer's move:", randomMove); */

function singleRound (playerSelection, computerSelection) {

    console.log("Player Selection:", playerSelection);
    console.log("Computer Selection:", randomMove);

   if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats Paper";
   } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
   }  else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
    return"It's a tie!";
   }  else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return"You Lose! Paper beats Rock";
   }  else if (playerSelection === "Rock" && computerSelection === "Rock") {
    return "It's a tie!";
   }  else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors";
   }  else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "It's a tie!";
   }  else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock";
   } else {
    return "You Lose! Scissors beat Paper";
   }
}

var result = singleRound("Rock", randomMove);

console.log(result);