var velocity6 = 2.5;
var positionX6 = 0;
var positionY6 = 0;
var ball6 = document.getElementById("ball6");
var reverseX6 = false;
var reverseY6 = false;

function moveBall6() {
  var Xmin6 = 0;
  var Ymin6 = 0;
  var Xmax6 = 1800;
  var Ymax6 = 960;

  if (reverseX6 === false && reverseY6 === false) {
    positionX6 = positionX6 + velocity6;
    ball6.style.left = positionX6 + "px";
    positionY6 = positionY6 + velocity6;
    ball6.style.top = positionY6 + "px";
    ball6.style.background = "orange";
    velocity6 = 2.5;
  } else if (reverseX6 === true && reverseY6 === false) {
    positionX6 = positionX6 - velocity6;
    ball6.style.left = positionX6 + "px";
    positionY6 = positionY6 + velocity6;
    ball6.style.top = positionY6 + "px";
    ball6.style.background = "orange";
    velocity6 = 2;
  } else if (reverseX6 === false && reverseY6 === true) {
    positionX6 = positionX6 + velocity6;
    ball6.style.left = positionX6 + "px";
    positionY6 = positionY6 - velocity6;
    ball6.style.top = positionY6 + "px";
    ball6.style.background = "yellow";
    velocity6 = 3;
  } else if (reverseX6 === true && reverseY6 === true) {
    positionX6 = positionX6 - velocity6;
    ball6.style.left = positionX6 + "px";
    positionY6 = positionY6 - velocity6;
    ball6.style.top = positionY6 + "px";
    ball6.style.background = "black";
    velocity6 = 2;
  }

  if (positionX6 > Xmax6 || positionX6 <= Xmin6) {
    reverseX6 = !reverseX6;
  } else if (positionY6 > Ymax6 || positionY6 <= Ymin6) {
    reverseY6 = !reverseY6;
  }
}

// This call the moveBall function every 100ms
setInterval(moveBall6, 1);
