const container = document.querySelector(".board");
const error = document.querySelector(".error")

let color = "black";

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);


  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", colorSquare)
    
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

function colorSquare(){
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeSize(input) {
  if(input >= 2 || input <= 100){
    resetBoard();
    makeRows(input, input)
    error.textContent = "Input must be between 2 and 100"
    
  } 
  else {
    makeRows(16, 16)
    error.textContent = "Error!!"
  }
}

function changeColor(choice){
  color = choice
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}