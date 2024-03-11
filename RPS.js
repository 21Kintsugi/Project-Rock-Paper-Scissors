function getComputerChoice () {
    var moves = ["Rock", "Papper", "Scissors"];
    var randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

var randomMove = getComputerChoice();
console.log(randomMove);