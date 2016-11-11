/*
* Function that increases the count in a box!
*
* @Create - Global variable "count" with value 0
* @DOM - Create a variable named "countElement"
* that targets the DOM element by the id "count"
* - Have "count" equal the "innerHTML" of
* "countElement"
* @Do - Increment "count" by 1;
*/
var count = 0;
function increaseCount(){
  var countElement = document.getElementById("count");
  countElement.innerHTML = count;
  for (var i = 0; i < 10; i++){
    count++;
  }
}

/*
* !!!ADVANCED!!!
*
* Function that adds colors attributes to the divs
* on the the DOM from an array
*
* @Create - Array "colors" with at least 3 color tag strings
* @DOM - Create a variable named "documentDivs"
* that targets the all the divs in the document
* with "getElementsByTagName"
* @Do - For loop iterating through "colors"
* and assigning those values to the iteration of "documentDivs"
* "style.backgroundColor"
*/
function addColor(){
  var colors = ["#0000ff", "#8B008B", "#9932CC"];
  var documentDivs = document.getElementsByTagName("div");

  for (var i = 0; i < colors.length; i++) {
    documentDivs[0].style.backgroundColor = colors[i];
  }
}