function getComputerChoice() {
    var moves = ["Rock", "Paper", "Scissors"];
    var randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

var randomMove = getComputerChoice();
/* console.log("Computer's move:", randomMove); */


function singleRound (playerSelection, computerSelection) {

    console.log("Player Selection:", playerSelection.toUpperCase());
    console.log("Computer Selection:", randomMove.toUpperCase());

   if (playerSelection === "scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats Paper";
   } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
   }  else if (playerSelection === "scissors" && computerSelection === "Scissors") {
    return"It's a tie!";
   }  else if (playerSelection === "rock" && computerSelection === "Paper") {
    return"You Lose! Paper beats Rock";
   }  else if (playerSelection === "rock" && computerSelection === "Rock") {
    return "It's a tie!";
   }  else if (playerSelection === "rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors";
   }  else if (playerSelection === "paper" && computerSelection === "Paper") {
    return "It's a tie!";
   }  else if (playerSelection === "paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock";
   } else {
    return "You Lose! Scissors beat Paper";
   }

}

var result = singleRound("RoCk".toLowerCase(), randomMove)

console.log(result);

