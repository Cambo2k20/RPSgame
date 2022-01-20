let playerPick = prompt("Rock, Paper or Scissors?").toLowerCase();
let computerPick = computerPlay().toLowerCase();
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choice = ["Rock", "Paper", "Scissors"];
  let computerPick = choice[Math.floor(Math.random() * choice.length)];
  return computerPick;
}

function playRound(playerPick, computerPick) {
  for (let i = 0; i < 4; i++) {
    if (playerPick == computerPick) {
      console.log("You have tied the game!");
    } else if (
      (playerPick == "rock" && computerPick == "scissors") ||
      (playerPick == "scissors" && computerPick == "paper") ||
      (playerPick == "paper" && computerPick == "rock")
    ) {
      console.log("You have won the game!");
      playerScore += 1;
    } else {
      console.log("You lost!");
      computerScore += 1;
    }
    playerPick = prompt("Rock, Paper or Scissors?").toLowerCase();
    computerPick = computerPlay().toLowerCase();
  }

  console.log(
    "The computer scored " + computerScore + " and you scored " + playerScore
  );
  if (playerScore > computerScore) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}

console.log(playRound(playerPick, computerPick));
