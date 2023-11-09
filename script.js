const boxes = document.getElementsByClassName("box");
let occupied = 0;
let currentMove = true;

function addListeners() {
  for (let box of boxes)
    box.addEventListener("click", (e) => {
      const imgO = document.createElement("img");
      const imgX = document.createElement("img");
      const box = e.target;
      imgO.src = "./assets/O.png";
      imgX.src = "./assets/X.png";

      if (isAvailable(box)) {
        if (currentMove) {
          box.append(imgX);
        } else {
          box.append(imgO);
        }
        box.classList.remove("playable");

        occupied++;

        let gameState = gameStatus();
        if (gameState === "winner" || gameState === "draw") {
          gameOver(gameState);
        }

        currentMove = !currentMove;
      }
    });
}

function isAvailable(box) {
  return box.classList.contains("playable");
}

function gameStatus() {
  let gameState = "active";
  const boxArray = [
    [boxes[0].firstChild, boxes[1].firstChild, boxes[2].firstChild],
    [boxes[3].firstChild, boxes[4].firstChild, boxes[5].firstChild],
    [boxes[6].firstChild, boxes[7].firstChild, boxes[8].firstChild],
  ];

  // Horizontal
  for (let row of boxArray) {
    if (row[0] && row[1] && row[2]) {
      if (row[0].src === row[1].src && row[0].src === row[2].src) {
        row[0].classList.add('winner')
        row[1].classList.add('winner')
        row[2].classList.add('winner')
        return "winner";
      }
    }
  }

  // Vetical
  for (let i = 0; i < 3; i++) {
    if (boxArray[0][i] && boxArray[1][i] && boxArray[2][i])
      if (
        boxArray[0][i].src === boxArray[1][i].src &&
        boxArray[0][i].src === boxArray[2][i].src
      ) {
        boxArray[0][i].classList.add('winner')
        boxArray[1][i].classList.add('winner')
        boxArray[2][i].classList.add('winner')
        return "winner";
      }
  }

  // Diagonal
  if (boxArray[1][1]) {
    if (boxArray[0][0] && boxArray[2][2]) {
      if (
        boxArray[1][1].src === boxArray[0][0].src &&
        boxArray[1][1].src === boxArray[2][2].src
      ) {
        boxArray[0][0].classList.add('winner')
        boxArray[1][1].classList.add('winner')
        boxArray[2][2].classList.add('winner')
        return "winner";
      }
    }
    if (boxArray[2][0] && boxArray[0][2]) {
      if (
        boxArray[1][1].src === boxArray[2][0].src &&
        boxArray[1][1].src === boxArray[0][2].src
      ) {
        boxArray[1][1].classList.add('winner')
        boxArray[2][0].classList.add('winner')
        boxArray[0][2].classList.add('winner')
        return "winner";
      }
    }
  }

  // Draw
  if (occupied === 9) {
    return "draw";
  }

  return gameState;
}

function setPlayable() {
  for (let box of boxes) {
    box.classList.add("playable");
    if (box.firstChild) box.removeChild(box.firstChild);
  }
}

function resetGame() {
  occupied = 0;
  currentMove = true;

  setPlayable();

  document.body.removeChild(document.getElementById("gameOverDiv"));
}

function gameOver(result) {
  for (let box of boxes) {
    box.classList.remove("playable");
    if (box.firstChild) {
      if (!box.firstChild.classList.contains('winner')) {
      box.firstChild.classList.add('loser')
      }
    }
  }

  const gameOverText = document.createElement("span");
  gameOverText.setAttribute("id", "gameOverText");

  if (result === "draw") {
    gameOverText.innerText = "It's a draw,\n Please try again!";
  } else {
    gameOverText.innerText = `The Winner is ${
      currentMove ? "X" : "O"
    }!\nBetter Luck Next Time ${currentMove ? "O" : "X"}! `;
  }

  const playAgainButton = document.createElement("input");
  playAgainButton.setAttribute("type", "button");
  playAgainButton.setAttribute("id", "playAgainButton");
  playAgainButton.setAttribute("value", "Play Again!");
  playAgainButton.addEventListener("click", (e) => {
    resetGame();
  });

  const gameOverDiv = document.createElement("div");
  gameOverDiv.setAttribute("id", "gameOverDiv");

  gameOverDiv.appendChild(gameOverText);
  gameOverDiv.appendChild(playAgainButton);
  document.body.append(gameOverDiv);
}

setPlayable();
addListeners();
