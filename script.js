input = 16;
grid = Math.pow(input, 2);
// let initiateGrid = 0;


// if (initiateGrid == 0) {
//   initiateGrid = 1;
//   createTable(grid);
// }


  for (let j = 1; j <= grid; j++) {
    let div = document.createElement("div");
    div.classList.add("cell");
    div.id = "cell";
    div.style.width = 100 / input + "%";
    div.style.height = 100 / input + "%";

    div.style.background = "white";

    document.getElementById("gridArena").appendChild(div);
  }

const cells = document.querySelectorAll(".cell");
cells.forEach(div => {
  div.addEventListener("mouseenter", e => {
    e.target.style.background = "black";
  });
});

function buttonReset() {

  for (var j = 1; j <= grid; j++) {
    const container = document.querySelector(`#gridArena`);
    const cells = document.querySelector(`.cell`);
    let containerClear = container.removeChild(cells);
  }

  let gridSize = prompt("Please enter the size of the new grid", "16");
  gridSize = parseInt(gridSize);
  grid = Math.pow(gridSize, 2);

  
  // console.log(gridSize);
  // createTable(grid);

  for (let j = 1; j <= grid; j++) {
    let div = document.createElement("div");
    div.classList.add("cell");
    div.id = "cell";
    div.style.width = 100 / gridSize + "%";
    div.style.height = 100 / gridSize + "%";

    div.style.background = "white";

    document.getElementById("gridArena").appendChild(div);
  }

  const cells = document.querySelectorAll(".cell");
  cells.forEach(div => {
    div.addEventListener("mouseenter", e => {
      e.target.style.background = "black";
    });
  });
}
