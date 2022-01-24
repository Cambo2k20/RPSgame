let playerPick = ["rock", "paper", "scissors"]; // = prompt("Rock, Paper or Scissors?").toLowerCase();
let computerPick = computerPlay().toLowerCase();
let playerScore = 0;
let computerScore = 0;

//CONNECT TO BUTTONS + ADD FUNCTIONALITY
const rockBTN = document.getElementById("rockBTN");
const paperBTN = document.getElementById("paperBTN");
const scissorsBTN = document.getElementById("scissorsBTN");

rockBTN.onclick = () => playRound(playerPick[0], computerPlay().toLowerCase());
paperBTN.onclick = () => playRound(playerPick[1], computerPlay().toLowerCase());
scissorsBTN.onclick = () =>
  playRound(playerPick[2], computerPlay().toLowerCase());

//DISPLAY RESULTS
const resultDisplay = document.getElementById("resultsDisplay");
const compScore = document.getElementById("compScore");
const playerScoreDisplay = document.getElementById("playerScore");

function computerPlay() {
  const choice = ["Rock", "Paper", "Scissors"];
  let computerPick = choice[Math.floor(Math.random() * choice.length)];
  return computerPick;
}

function playRound(playerPick, computerPick) {
  if (playerPick == computerPick) {
    resultDisplay.innerHTML = "You have tied the game!";
  } else if (
    (playerPick == "rock" && computerPick == "scissors") ||
    (playerPick == "scissors" && computerPick == "paper") ||
    (playerPick == "paper" && computerPick == "rock")
  ) {
    resultDisplay.innerHTML = "You have won the game!";
    playerScore += 1;
    playerScoreDisplay.innerHTML = playerScore;
  } else {
    resultDisplay.innerHTML = "You lost!";
    computerScore += 1;
    compScore.innerHTML = computerScore;
  }
  if (playerScore == 5) {
    resultDisplay.innerHTML = "You win this game!";
  } else if (computerScore == 5) {
    resultDisplay.innerHTML = "The Computer wins this game!";
  }

  // console.log(
  //   "The computer scored " +
  //     computerScore +
  //     " and you scored " +
  //     playerScore +
  //     " choice " +
  //     playerPick +
  //     " comp " +
  //     computerPick
  // );
}

// console.log(playRound(playerPick, computerPick));
