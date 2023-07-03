var velocity2 = 2.8;
var positionX2 = 0;
var positionY2 = 0;
var ball2 = document.getElementById("ball2");
var reverseX2 = false;
var reverseY2 = false;

function moveball2() {
  var Xmin2 = 0;
  var Ymin2 = 0;
  var Xmax2 = 1800;
  var Ymax2 = 960;

  if (reverseX2 === false && reverseY2 === false) {
    positionX2 = positionX2 + velocity2;
    ball2.style.left = positionX2 + "px";
    positionY2 = positionY2 + velocity2;
    ball2.style.top = positionY2 + "px";
    ball2.style.background = "green";
    velocity2 = 2.8;
  } else if (reverseX2 === true && reverseY2 === false) {
    positionX2 = positionX2 - velocity2;
    ball2.style.left = positionX2 + "px";
    positionY2 = positionY2 + velocity2;
    ball2.style.top = positionY2 + "px";
    ball2.style.background = "yellow";
    velocity2 = 1.5;
  } else if (reverseX2 === false && reverseY2 === true) {
    positionX2 = positionX2 + velocity2;
    ball2.style.left = positionX2 + "px";
    positionY2 = positionY2 - velocity2;
    ball2.style.top = positionY2 + "px";
    ball2.style.background = "orange";
    velocity2 = 2;
  } else if (reverseX2 === true && reverseY2 === true) {
    positionX2 = positionX2 - velocity2;
    ball2.style.left = positionX2 + "px";
    positionY2 = positionY2 - velocity2;
    ball2.style.top = positionY2 + "px";
    ball2.style.background = "pink";
    velocity2 = 1;
  }

  if (positionX2 > Xmax2 || positionX2 <= Xmin2) {
    reverseX2 = !reverseX2;
  } else if (positionY2 > Ymax2 || positionY2 <= Ymin2) {
    reverseY2 = !reverseY2;
  }
}

setInterval(moveball2, 1);
