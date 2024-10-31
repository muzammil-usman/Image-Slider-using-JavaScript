let slider = document.getElementById("slider");
var links = [
  "Assets/1.jpg",
  "Assets/2.jpg",
  "Assets/3.jpg",
  "Assets/4.jpg",
  "Assets/5.jpg",
];
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

    if (count === -1) {
      count = 4;
    }
  }
  slider.setAttribute("src", links[count]);
}
