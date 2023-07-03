var velocity = 2;
var positionX = 0;
var positionY = 0;
var ball = document.getElementById("ball");
var reverseX = false;
var reverseY = false;

function moveBall() {
  var Xmin = 0;
  var Ymin = 0;
  var Xmax = 1700;
  var Ymax = 870;

  if (reverseX === false && reverseY === false) {
    positionX = positionX + velocity;
    ball.style.left = positionX + "px";
    positionY = positionY + velocity;
    ball.style.top = positionY + "px";
    ball.style.background = "black";
    velocity = 1.5;
  } else if (reverseX === true && reverseY === false) {
    positionX = positionX - velocity;
    ball.style.left = positionX + "px";
    positionY = positionY + velocity;
    ball.style.top = positionY + "px";
    ball.style.background = "red";
    velocity = 2;
  } else if (reverseX === false && reverseY === true) {
    positionX = positionX + velocity;
    ball.style.left = positionX + "px";
    positionY = positionY - velocity;
    ball.style.top = positionY + "px";
    ball.style.background = "yellow";
    velocity = 2;
  } else if (reverseX === true && reverseY === true) {
    positionX = positionX - velocity;
    ball.style.left = positionX + "px";
    positionY = positionY - velocity;
    ball.style.top = positionY + "px";
    ball.style.background = "blue";
    velocity = 1.5;
  }

  if (positionX > Xmax || positionX <= Xmin) {
    reverseX = !reverseX;
  } else if (positionY > Ymax || positionY <= Ymin) {
    reverseY = !reverseY;
  }
}

setInterval(moveBall, 1);
