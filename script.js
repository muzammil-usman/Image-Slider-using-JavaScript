let slider = document.getElementById("slider");
var links = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
let count = 0;

function next(value) {
  if (value === "+") {
    count++;
  }
  if (count > 4) {
    count = 0;
  }
  slider.setAttribute("src", links[count]);
}
function previous(value) {
  if (value === "-") {
    count--;
  }
  slider.setAttribute("src", links[count]);
}
