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
        if (gameState === "winner") {
          console.log(`Winner is ${currentMove ? "X" : "O"}`);
        } else if (gameState === "draw") {
          console.log("draw");
        } else {
          console.log("active");
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
        return 'winner'
      }
  }

  // Diagonal
  if (boxArray[1][1]) {
    if(boxArray[0][0] && boxArray[2][2]) {
      if (boxArray[1][1].src === boxArray[0][0].src && boxArray[1][1].src === boxArray[2][2].src) {
        return 'winner'
      }
    }
    if(boxArray[2][0] && boxArray[0][2]) {
      if (boxArray[1][1].src === boxArray[2][0].src && boxArray[1][1].src === boxArray[0][2].src) {
        return 'winner'
      }
    }
  }

  // Draw
  if (occupied === 9) {
    return 'draw'
  }
  return gameState;
}

function resetGame() {
  for (let box of boxes) {
    box.classList.add("playable");
    if (box.firstChild) box.removeChild(box.firstChild);
  }
  occupied = 0;
  currentMove = true;
}

resetGame();
addListeners();
