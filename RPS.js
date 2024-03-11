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

   if (playerSelection.toLowerCase() === "Scissors" && computerSelection.toLowerCase() === "Paper") {
    return "You Win! Scissors beats Paper";
   } 
   else if (playerSelection.toLowerCase() === "Scissors" && computerSelection.toLowerCase() === "Rock") {
    return "You Lose! Rock beats Scissors";
   } 
   else if (playerSelection.toLowerCase() === "Scissors" && computerSelection.toLowerCase() === "Scissors") {
    return"It's a tie!";
   } 
   else if (playerSelection.toLowerCase() === "Rock" && computerSelection.toLowerCase() === "Paper") {
    return"You Lose! Paper beats Rock";
   } 
   else if (playerSelection.toLowerCase() === "Rock" && computerSelection.toLowerCase() === "Rock") {
    return "It's a tie!";
   } 
   else if (playerSelection.toLowerCase() === "Rock" && computerSelection.toLowerCase() === "Scissors") {
    return "You Win! Rock beats Scissors";
   } 
   else if (playerSelection.toLowerCase() === "Paper" && computerSelection.toLowerCase() === "Paper") {
    return "It's a tie!";
   } 
   else if (playerSelection.toLowerCase() === "Paper" && computerSelection.toLowerCase() === "Rock") {
    return "You Win! Paper beats Rock";
   } 
   else {
    return "You Lose! Scissors beat Paper";
   }
}

var result = singleRound("Paper", randomMove);

console.log(result);