/*Player select a input
computer select a random input 
display result in screen
add result to score*/
const playerObj = document.querySelectorAll(".playerResult > img");
const computerObj = document.querySelectorAll(".computerResult > img");
const resultTxt = document.querySelector(".resultText");
const resultDesc = document.querySelector(".resultDescription");
const playerScoreTxt = document.querySelector(".playerScore");
const computerScoreTxt = document.querySelector(".computerScore");
const playerBtns = document.querySelectorAll(".playerSelection");

let playerScore = 0;
let computerScore = 0;

const computerMove = (playerMove) => {
  const moves = ["Rock", "Paper", "Scissors"];
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
  document.querySelector(".playerResult h3").style.display = "none";
  document.querySelector(".computerResult h3").style.display = "none";
  document.querySelector(".gameOverText").style.display = "none";
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
    } else if (move == "Scissors" && e.classList.contains("scissorsSVG")) {
      e.style.display = "block";
    }
  });
};

const engine = (playerMove, computerMove) => {
  resultDesc.style.display = "block";
  if (playerMove === computerMove) {
    revealMove(playerMove, "player");
    revealMove(computerMove, "computer");
    resultTxt.innerHTML = "Tie game!";
    resultDesc.innerHTML = "";
  } else if (computerMove == "Rock" && playerMove == "Scissors") {
    computerScore++;
    computerScoreTxt.innerText = computerScore;

    revealMove(playerMove, "player");
    revealMove(computerMove, "computer");
    resultTxt.innerHTML = "Computer wins!";
    resultDesc.innerHTML = `${computerMove} beats ${playerMove}`;
  } else if (computerMove == "Scissors" && playerMove == "Paper") {
    computerScore++;
    computerScoreTxt.innerText = computerScore;

    revealMove(playerMove, "player");
    revealMove(computerMove, "computer");

    resultTxt.innerHTML = "Computer wins!";
    resultDesc.innerHTML = `${computerMove} beats ${playerMove}`;
  } else if (computerMove == "Paper" && playerMove == "Rock") {
    computerScore++;
    computerScoreTxt.innerText = computerScore;
    revealMove(playerMove, "player");
    revealMove(computerMove, "computer");
    resultTxt.innerHTML = "Computer wins!";
    resultDesc.innerHTML = `${computerMove} beats ${playerMove}`;
  } else {
    playerScore++;
    playerScoreTxt.innerText = playerScore;

    revealMove(playerMove, "player");
    revealMove(computerMove, "computer");

    resultTxt.innerHTML = "Player wins!";
    resultDesc.innerHTML = `${playerMove} beats ${computerMove}`;
  }

  if (playerScore == 5 || computerScore == 5) {
    document.querySelector(".gameOverText").style.display = "block";
    playerBtns.forEach((e) => {
      e.style.display = "none";
      document.querySelector(".resetGame").style.display = "inline-flex";
    });
  }
};

document.addEventListener("click", (e) => {
  if (
    e.target.innerText === "Rock" ||
    e.target.innerText === "Paper" ||
    e.target.innerText === "Scissors"
  ) {
    resetMove();
    const playerInput = e.target.innerText;
    engine(playerInput, computerMove());
    document.querySelector(".playerResult h3").style.display = "block";
    document.querySelector(".computerResult h3").style.display = "block";
    // console.log(playerScore);
    // console.log(computerScore);
  }
  if (e.target.innerText === "Play Again!") {
    playerScore = 0;
    computerScore = 0;
    playerScoreTxt.innerHTML = "0";
    computerScoreTxt.innerHTML = "0";
    playerBtns.forEach((e) => (e.style.display = "inline-flex"));
    document.querySelector(".resetGame").style.display = "none";
    resultTxt.innerText = "New Game!";
    resultDesc.innerText = "";
    resultDesc.style.display = "none";
    resetMove();
  }
});
