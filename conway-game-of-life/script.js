let width = 0;
let height = 0;
let checkboxes = [];
let field = document.getElementById("field");
let stepButton = document.getElementById("step");
let createButton = document.getElementById("create");
let simulationButton = document.getElementById("simulation");

stepButton.disabled = true;
simulationButton.disabled = true;

createButton.addEventListener("click", () => {
  let inputHeight = document.querySelector("[placeholder='height']");
  let inputWidth = document.querySelector("[placeholder='width']");
  height = inputHeight.value || 2;
  width = inputWidth.value || 2;

  if (isNaN(Number(height)) || isNaN(Number(width))) return;
  if (height > 42 || Number(width) > 42) return;

  for (let i = 0; i < height; i++) {
    let row = [];
    for (let i = 0; i < width; i++) {
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      if (Math.random() < 0.5) checkbox.checked = true;
      row.push(checkbox);
      field.appendChild(checkbox);
    }

    checkboxes.push(row);
    field.appendChild(document.createElement("br"));
  }

  createButton.disabled = true;
  inputHeight.disabled = true;
  inputWidth.disabled = true;
  stepButton.disabled = false;
  simulationButton.disabled = false;
});

stepButton.addEventListener("click", createNewGeneration);
simulationButton.addEventListener("click", runSimulation);

let life = null;
function runSimulation() {
  if (!life) {
    simulationButton.textContent = "stop";
    life = setInterval(createNewGeneration, 200);
  } else {
    simulationButton.textContent = "start";
    clearInterval(life);
    life = null;
  }
}

function createNewGeneration() {
  let copyState = checkboxes
    .slice()
    .map((item) => item.map((item) => item.checked));
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let neighbors = countLiveNeighbors(i, j, copyState);
      if (copyState[i][j] && (neighbors > 3 || neighbors < 2))
        checkboxes[i][j].checked = false;
      if (!copyState[i][j] && neighbors === 3) checkboxes[i][j].checked = true;
    }
  }
}

function countLiveNeighbors(row, column, matrix) {
  let numberOfLiveNeighbors = 0;
  for (let i = row - 1; i < row + 2; i++) {
    for (let j = column - 1; j < column + 2; j++) {
      if (!matrix[i] || !matrix[i][j]) continue;
      if (i === row && j === column) continue;
      if (matrix[i][j]) numberOfLiveNeighbors++;
    }
  }
  return numberOfLiveNeighbors;
}
