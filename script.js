let compChoice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randIndex = Math.floor(Math.random() * 3);
  return compChoice[randIndex];
}

function playerSelection() {
  let playerChoice = window.prompt("Let's play Rock, Paper, Scissors! :D");
  playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
  return playerChoice;
}

let computerPoints = 0;
let playerPoints = 0;

function playRound(getComputerChoice, playerSelection) {
  let computerChoice = getComputerChoice();
  let playerChoice = playerSelection();

  alert("Computer: " + computerChoice);

  if (computerChoice === "Rock") {
    if (playerChoice === "Rock") {
      alert("It's a draw!");
    } else if (playerChoice === "Paper") {
      alert("You win! Paper beats Rock");
      playerPoints++;
    } else if (playerChoice === "Scissors") {
      alert("You lose! Rock beats Scissors");
      computerPoints++;
    }
  } else if (computerChoice === "Paper") {
    if (playerChoice === "Rock") {
      alert("You lose! Paper beats Rock");
      computerPoints++;
    } else if (playerChoice === "Paper") {
      alert("It's a draw!");
    } else if (playerChoice === "Scissors") {
      alert("You win! Scissors beats Paper");
      playerPoints++;
    }
  } else if (computerChoice === "Scissors") {
    if (playerChoice === "Rock") {
      alert("You win! Rock beats Scissors");
      playerPoints++;
    } else if (playerChoice === "Paper") {
      alert("You lose! Scissors beats Paper");
      computerPoints++;
    } else if (playerChoice === "Scissors") {
      alert("It's a draw!");
    }
  }
}

function playGame() {
  for(let i=1; i<=5; i++)
 {
   alert("Round " + i);
   playRound(getComputerChoice, playerSelection);
 }

 if(computerPoints === playerPoints)
 {
  alert("Same number of points.It's a tie!")
 }
 else if(computerPoints > playerPoints)
 {
  alert("Too bad, you lost. GG")
 }
 else
 {
  alert("You won the game!")
 }

}

playGame();
