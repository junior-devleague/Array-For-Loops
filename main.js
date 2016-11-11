var array = ["Bear", "Big", "Bad"];
var colors1 = ["#0000ff", "#9932CC", "#8B008B"];
var colors = ["#0000ff", "#9932CC", "#8B008B"];
var size = ["0px", "10px", "10px"];
var divs;

function createDivs(){
  var objTo = document.getElementById('container');
  for (var i = 0; i < array.length; i++) {
    divs = document.createElement("div");
    divs.innerHTML = array[i];
    objTo.appendChild(divs);
  }
}

function addColor(){
  var objTo = document.getElementById('container');
  divs = document.getElementsByTagName("div");
  for (var i = 0; i < colors1.length; i++) {
    divs[i].style.backgroundColor = colors[i];
  }
}

function addSize(){
  var objTo = document.getElementById('container');
  divs = document.getElementsByTagName("div");
  for (var i = 0; i < size.length; i++) {
    divs[i].style.fontSize = size[i];
  }
}

