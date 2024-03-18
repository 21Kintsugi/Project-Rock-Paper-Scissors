function getComputerChoice() {
    var moves = ["Rock", "Paper", "Scissors"];
    var randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

var randomMove = getComputerChoice();
/* console.log("Computer's move:", randomMove); */



//HERE IS THE INITIAL, LONG VERSION OF THE singleRound function
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

// HERE IS THE SHORT AND FINAL VERSION OF THE singleRound function:
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

//HERE IS THE CODE FOR THE TASK 6(First part only), not interractive on browser:
var oneRound = singleRound("SciSSORS".toLowerCase(), randomMove);

console.log(oneRound); 

function playGame() {
   var roundOne = singleRound("rock".toLowerCase(), randomMove);
   console.log(roundOne);
   var roundTwo = singleRound("paper".toLowerCase(), randomMove);
   console.log(roundTwo);
   var roundThree = singleRound("scissors".toLowerCase(), randomMove);
   console.log(roundThree);
   var roundFour = singleRound("paper".toLowerCase(), randomMove);
   console.log(roundFour);
   var roundFive = singleRound("scissors".toLowerCase(), randomMove);
   console.log(roundFive);
}

playGame();

