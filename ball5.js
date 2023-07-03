var velocity5 = 1;
var positionX5 = 0;
var positionY5 = 0;
var ball5 = document.getElementById("ball5");
var reverseX5 = false;
var reverseY5 = false;

function moveBall5() {
  var Xmin5 = 0;
  var Ymin5 = 0;
  var Xmax5 = 1400;
  var Ymax5 = 570;

  if (reverseX5 === false && reverseY5 === false) {
    positionX5 = positionX5 + velocity5;
    ball5.style.left = positionX5 + "px";
    positionY5 = positionY5 + velocity5;
    ball5.style.top = positionY5 + "px";
    ball5.style.background = "violet";
    velocity5 = 1;
  } else if (reverseX5 === true && reverseY5 === false) {
    positionX5 = positionX5 - velocity5;
    ball5.style.left = positionX5 + "px";
    positionY5 = positionY5 + velocity5;
    ball5.style.top = positionY5 + "px";
    ball5.style.background = "red";
    velocity5 = 2;
  } else if (reverseX5 === false && reverseY5 === true) {
    positionX5 = positionX5 + velocity5;
    ball5.style.left = positionX5 + "px";
    positionY5 = positionY5 - velocity5;
    ball5.style.top = positionY5 + "px";
    ball5.style.background = "orange";
    velocity5 = 1;
  } else if (reverseX5 === true && reverseY5 === true) {
    positionX5 = positionX5 - velocity5;
    ball5.style.left = positionX5 + "px";
    positionY5 = positionY5 - velocity5;
    ball5.style.top = positionY5 + "px";
    ball5.style.background = "yellow";
    velocity5 = 2;
  }

  if (positionX5 > Xmax5 || positionX5 <= Xmin5) {
    reverseX5 = !reverseX5;
  } else if (positionY5 > Ymax5 || positionY5 <= Ymin5) {
    reverseY5 = !reverseY5;
  }
}

setInterval(moveBall5, 1);
