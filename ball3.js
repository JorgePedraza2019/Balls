var velocity3 = 3;
var positionX3 = 0;
var positionY3 = 0;
var ball3 = document.getElementById("ball3");
var reverseX3 = false;
var reverseY3 = false;

function moveBall3() {
  var Xmin3 = 0;
  var Ymin3 = 0;
  var Xmax3 = 1700;
  var Ymax3 = 900;

  if (reverseX3 === false && reverseY3 === false) {
    positionX3 = positionX3 + velocity3;
    ball3.style.left = positionX3 + "px";
    positionY3 = positionY3 + velocity3;
    ball3.style.top = positionY3 + "px";
    ball3.style.width = "100px";
    ball3.style.height = "100px";
    ball3.style.background = "blue";
    velocity3 = 2.3;
  } else if (reverseX3 === true && reverseY3 === false) {
    positionX3 = positionX3 - velocity3;
    ball3.style.left = positionX3 + "px";
    positionY3 = positionY3 + velocity3;
    ball3.style.top = positionY3 + "px";
    ball3.style.width = "125px";
    ball3.style.height = "125px";
    ball3.style.background = "orange";
    velocity3 = 1.5;
  } else if (reverseX3 === false && reverseY3 === true) {
    positionX3 = positionX3 + velocity3;
    ball3.style.left = positionX3 + "px";
    positionY3 = positionY3 - velocity3;
    ball3.style.width = "175px";
    ball3.style.height = "175px";
    ball3.style.top = positionY3 + "px";
    ball3.style.background = "red";
    velocity3 = 2;
  } else if (reverseX3 === true && reverseY3 === true) {
    positionX3 = positionX3 - velocity3;
    ball3.style.left = positionX3 + "px";
    positionY3 = positionY3 - velocity3;
    ball3.style.top = positionY3 + "px";
    ball3.style.width = "150px";
    ball3.style.height = "150px";
    ball3.style.background = "black";
    velocity3 = 1.5;
  }

  if (positionX3 > Xmax3 || positionX3 <= Xmin3) {
    reverseX3 = !reverseX3;
  } else if (positionY3 > Ymax3 || positionY3 <= Ymin3) {
    reverseY3 = !reverseY3;
  }
}

setInterval(moveBall3, 1);
