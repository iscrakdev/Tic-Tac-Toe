const imgO = document.createElement('img');
imgO.src = "./assets/O.png";
const imgX = document.createElement('img');
imgX.src = "./assets/X.png";

const boxes = document.getElementsByClassName("box");
for(let box of boxes) box.addEventListener('click', e => {
  let box = e.target;
  box.append(imgO);
  
})