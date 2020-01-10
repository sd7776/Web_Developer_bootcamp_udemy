var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var message = document.querySelector("#message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
  //mode button listeners
  setupModeButtons();
  //Draw the squares and set up EventListeners
  setupSquares();
  reset();
}

function reset() {
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickRandomColor();
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else {
        squares[i].style.display = "none";
    }
  }
  colorDisplay.textContent = pickedColor;
  header.style.background = "#2b2a28";
  message.textContent = "";
  resetButton.textContent = "New Colors";
}

resetButton.addEventListener('click', function(){
    reset();
});

function setupModeButtons() {
  for(var i = 0; i < modeBtns.length; i++)
  {
    modeBtns[i].addEventListener('click', function(){
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    //add clicklinsteners
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        resetButton.textContent = "Play Again?";
        message.textContent = "Correct!";
        changeColors(pickedColor);
        header.style.backgroundColor = pickedColor;
      }else {
        this.style.background = "#2b2a28";
        message.textContent = "Try Again";
      }
    });
  }
}

function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickRandomColor(){
  var randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}
function generateRandomColors(size)
{
  var arr = [];
  for(var i = 0; i < size; i++)
  {
    arr[i] = randomColor();
  }
  return arr;
}

function randomColor()
{

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var randomColor = `rgb(${r}, ${g}, ${b})`;

  return randomColor;
}
