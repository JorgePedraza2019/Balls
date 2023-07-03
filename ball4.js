var velocity4 = 4;
var positionX4 = 0;
var positionY4 = 0;
var ball4 = document.getElementById("ball4");
var reverseX4 = false;
var reverseY4 = false;

function moveball4() {
  var Xmin4 = 0;
  var Ymin4 = 0;
  var Xmax4 = 1700;
  var Ymax4 = 900;

  if (reverseX4 === false && reverseY4 === false) {
    positionX4 = positionX4 + velocity4;
    ball4.style.left = positionX4 + "px";
    positionY4 = positionY4 + velocity4;
    ball4.style.top = positionY4 + "px";
    ball4.style.width = "100px";
    ball4.style.height = "100px";
    ball4.style.background = "red";
    velocity4 = 3.5;
  } else if (reverseX4 === true && reverseY4 === false) {
    positionX4 = positionX4 - velocity4;
    ball4.style.left = positionX4 + "px";
    positionY4 = positionY4 + velocity4;
    ball4.style.top = positionY4 + "px";
    ball4.style.width = "150px";
    ball4.style.height = "150px";
    ball4.style.background = "gray";
    velocity4 = 2;
  } else if (reverseX4 === false && reverseY4 === true) {
    positionX4 = positionX4 + velocity4;
    ball4.style.left = positionX4 + "px";
    positionY4 = positionY4 - velocity4;
    ball4.style.width = "125px";
    ball4.style.height = "125px";
    ball4.style.top = positionY4 + "px";
    ball4.style.background = "violet";
    velocity4 = 3;
  } else if (reverseX4 === true && reverseY4 === true) {
    positionX4 = positionX4 - velocity4;
    ball4.style.left = positionX4 + "px";
    positionY4 = positionY4 - velocity4;
    ball4.style.top = positionY4 + "px";
    ball4.style.width = "175px";
    ball4.style.height = "175px";
    ball4.style.background = "blue";
    velocity4 = 2;
  }

  if (positionX4 > Xmax4 || positionX4 <= Xmin4) {
    reverseX4 = !reverseX4;
  } else if (positionY4 > Ymax4 || positionY4 <= Ymin4) {
    reverseY4 = !reverseY4;
  }
}

setInterval(moveball4, 1);
