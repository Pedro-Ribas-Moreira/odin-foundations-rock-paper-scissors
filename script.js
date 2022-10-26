/*Player select a input
computer select a random input 
display result in screen
add result to score*/

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissor = document.querySelector(".scissorBtn");

let playerScore = 0;
let computerScore = 0;

const computerMove = (playerMove) => {
  const moves = ["Rock", "Paper", "Scissor"];
  const n = Math.floor(Math.random() * moves.length);
  return moves[n];
};

const engine = (playerMove, computerMove) => {
  if (playerMove === computerMove) {
    console.log(`Computer chose: ${computerMove}`);
    console.log(`Player chose: ${playerMove}`);
    console.log("tie game");
  } else if (
    (computerMove == "Rock" && playerMove == "Scissor") ||
    (computerMove == "Scissor" && playerMove == "Paper") ||
    (computerMove == "Paper" && playerMove == "Rock")
  ) {
    computerScore++;
    console.log(`Computer chose: ${computerMove}`);
    console.log(`Player chose: ${playerMove}`);
    console.log("Computer wins");
  } else {
    playerScore++;
    console.log(`Computer chose: ${computerMove}`);
    console.log(`Player chose: ${playerMove}`);
    console.log("Player wins");
  }

  if (playerScore == 5 || computerScore == 5) {
    console.log("Game over!");
  }
};

document.addEventListener("click", (e) => {
  if (
    e.target.innerText === "Rock" ||
    e.target.innerText === "Paper" ||
    e.target.innerText === "Scissor"
  ) {
    const playerInput = e.target.innerText;
    engine(playerInput, computerMove());
    console.log(playerScore);
    console.log(computerScore);
  }
});
