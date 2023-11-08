let lastMove = null;

const boxes = document.getElementsByClassName("box");
for(let box of boxes) box.addEventListener('click', e => {
  const imgO = document.createElement('img');
  const imgX = document.createElement('img');
  const box = e.target;
  imgO.src = "./assets/O.png";
  imgX.src = "./assets/X.png";

  if(isAvailable(box)) {
    if(lastMove === 'o') {
      box.append(imgX);
      lastMove = 'x';
    } else {
      box.append(imgO);
      lastMove = 'o';
    }
  } 

})

function isAvailable(box) {
  return box.children.length ? true : false
}

function gameStatus() {
  // for each space
  // check horizontal, vertical and diagonal neighbors
  // if 3 consecutive matching squares, game is won
  // else if all squares occupied, game is draw
  // else game is still active
  // return winner, draw, or active
}