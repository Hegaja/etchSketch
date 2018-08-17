input = 40;
grid = Math.pow(input, 2);

for (let j = 1; j <= grid; j++) {
  let div = document.createElement("div");
  div.classList.add("cell");
  div.id = "cell";
  div.style.width = 100 / (input) + "%";
  div.style.height = 100 / (input) + "%";
  
  div.style.background = "white";
  
  document.getElementById("gridArena").appendChild(div);
}

const cells = document.querySelectorAll('.cell');
  cells.forEach((div) => {
    div.addEventListener('mouseenter', (e) => {
      e.target.style.background = 'black';
    });
});
