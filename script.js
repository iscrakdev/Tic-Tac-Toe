
const boxes = document.getElementsByClassName("box");
for(let box of boxes) box.addEventListener('click', e => {
  const imgO = document.createElement('img');
  const imgX = document.createElement('img');
  const box = e.target;
  imgO.src = "./assets/O.png";
  imgX.src = "./assets/X.png";
  box.append(imgO);

})