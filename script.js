/*Player select a input
computer select a random input 
display result in screen
add result to score*/
const playerObj = document.querySelectorAll(".playerResult object");
const computerObj = (obj = document.querySelectorAll(".computerResult object"));
const resultTxt = document.querySelector(".resultText");
const playerScoreTxt = document.querySelector(".playerScore");
const computerScoreTxt = document.querySelector(".computerScore");

let playerScore = 0;
let computerScore = 0;

const computerMove = (playerMove) => {
  const moves = ["Rock", "Paper", "Scissor"];
  const n = Math.floor(Math.random() * moves.length);
  return moves[n];
};

const resetMove = () => {
  playerObj.forEach((element) => {
    element.style.display = "none";
  });
  computerObj.forEach((element) => {
    element.style.display = "none";
  });
};
const revealMove = (move, who) => {
  document.querySelector(".playerPlaceHolder").style.display = "none";
  document.querySelector(".computerPlaceHolder").style.display = "none";
  let obj;
  if (who == "player") {
    obj = playerObj;
  } else if (who == "computer") {
    obj = computerObj;
  }
  console.log(obj);
  obj.forEach((e) => {
    if (move == "Rock" && e.classList.contains("rockSVG")) {
      e.style.display = "block";
    } else if (move == "Paper" && e.classList.contains("paperSVG")) {
      e.style.display = "block";
    } else if (move == "Scissor" && e.classList.contains("scissorsSVG")) {
      e.style.display = "block";
    }
  });
};

const engine = (playerMove, computerMove) => {
  if (playerMove === computerMove) {
    revealMove(playerMove, "player");
    revealMove(computerMove, "computer");
    resultTxt.innerHTML = "Tie game!";
  } else if (computerMove == "Rock" && playerMove == "Scissor") {
    computerScore++;
    computerScoreTxt.innerText = computerScore;

    revealMove(playerMove, "player");
    revealMove(computerMove, "computer");

    resultTxt.innerHTML = "Computer wins!";
  } else if (computerMove == "Scissor" && playerMove == "Paper") {
    computerScore++;
    computerScoreTxt.innerText = computerScore;

    revealMove(playerMove, "player");
    revealMove(computerMove, "computer");

    resultTxt.innerHTML = "Computer wins!";
  } else if (computerMove == "Paper" && playerMove == "Rock") {
    computerScore++;
    computerScoreTxt.innerText = computerScore;
    revealMove(playerMove, "player");
    revealMove(computerMove, "computer");
    resultTxt.innerHTML = "Computer wins!";
  } else {
    playerScore++;
    playerScoreTxt.innerText = playerScore;

    revealMove(playerMove, "player");
    revealMove(computerMove, "computer");

    resultTxt.innerHTML = "Player wins!";
  }

  if (playerScore == 5 || computerScore == 5) {
    resultTxt.innerHTML = "Game is over!";
  }
  revealMove();
};

document.addEventListener("click", (e) => {
  if (
    e.target.innerText === "Rock" ||
    e.target.innerText === "Paper" ||
    e.target.innerText === "Scissor"
  ) {
    resetMove();
    const playerInput = e.target.innerText;
    engine(playerInput, computerMove());
    console.log(playerScore);
    console.log(computerScore);
  }

  if (resultTxt == "Game Over!") {
    playerScore = 0;
    computerScore = 0;
  }
});
