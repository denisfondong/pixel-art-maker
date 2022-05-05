// Select color input
let color = document.getElementById("colorPicker");
// Select size input
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");
let sizePicker = document.getElementById("sizePicker");
let pixelCanvas = document.getElementById("pixelCanvas");


// When size is submitted by the user, call makeGrid()

sizePicker.addEventListener("submit", (e) => {
  e.preventDefault();
  pixelCanvas.innerHTML = "";
  makeGrid();
})

function makeGrid() {
  let height = gridHeight.value;
  let width = gridWidth.value;

  for (let i = 0; i < height; i++) {
    const row = pixelCanvas.insertRow(0);
    for (let j = 0; j < width; j++) {
      const column = row.insertCell(0);
      pixelCanvas.addEventListener("click", (e) => {
        e.target.style.backgroundColor = color.value;
      });
    }
  }
}
// Your code goes here!