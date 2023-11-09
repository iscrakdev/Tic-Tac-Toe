const boxes = document.getElementsByClassName("box");
let occupied = 0;

function addListeners() {
  let currentMove = true;

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
        currentMove = !currentMove;
        occupied++;

        let gameState = gameStatus();
        if (gameState === "winner") {
          console.log("winner");
        } else if (gameState === "draw") {
          console.log("draw");
        } else {
          console.log("active");
        }
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

  for(let row of boxArray) {
    if(row[0] && row[0] === row[1] && row[0] === row[2]) {
      return "winner";
    } 
  } 


  // for each space
  /* for the given box */
  // check horizontal, vertical and diagonal neighbors

  // if 3 consecutive matching squares, game is won
  // else if all squares occupied, game is draw
  /* a count variable to get to 9 squares could also return game is draw if no winner is found*/

  // else game is still active

  // return winner, draw, or active
  return gameState;
}

function resetGame() {
  for (let box of boxes) {
    box.classList.add("playable");
    if(box.firstChild) box.removeChild(box.firstChild)
  }
  occupied = 0;
}

resetGame();
addListeners();
