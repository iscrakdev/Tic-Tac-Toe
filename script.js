let lastMove = null;

const boxes = document.getElementsByClassName("box");
for(let box of boxes) box.addEventListener('click', e => {
  const imgO = document.createElement('img');
  const imgX = document.createElement('img');
  const box = e.target;
  imgO.src = "./assets/O.png";
  imgX.src = "./assets/X.png";
  
  if(isAvailable(box)) {
    if(lastMove === 'x') {
      box.append(imgO);
      lastMove = 'o';
    } else {
      box.append(imgX);
      lastMove = 'x';
    }
  } 

})

function isAvailable(box) {
  return box.parentNode.id === "main" ? true : false;
}

function gameStatus() {
  // for each space
  // check horizontal, vertical and diagonal neighbors
  // if 3 consecutive matching squares, game is won
  // else if all squares occupied, game is draw
  // else game is still active
  // return winner, draw, or active
}