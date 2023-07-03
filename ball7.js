var velocity7 = 3;
var positionX7 = 0;
var positionY7 = 0;
var ball7 = document.getElementById("ball7");
var reverseX7 = false;
var reverseY7 = false;

function moveBall7() {
  var Xmin7 = 0;
  var Ymin7 = 0;
  var Xmax7 = 1800;
  var Ymax7 = 960;

  if (reverseX7 === false && reverseY7 === false) {
    positionX7 = positionX7 + velocity7;
    ball7.style.left = positionX7 + "px";
    positionY7 = positionY7 + velocity7;
    ball7.style.top = positionY7 + "px";
    ball7.style.background = "greenyellow";
    velocity7 = 3;
  } else if (reverseX7 === true && reverseY7 === false) {
    positionX7 = positionX7 - velocity7;
    ball7.style.left = positionX7 + "px";
    positionY7 = positionY7 + velocity7;
    ball7.style.top = positionY7 + "px";
    ball7.style.background = "red";
    velocity7 = 2;
  } else if (reverseX7 === false && reverseY7 === true) {
    positionX7 = positionX7 + velocity7;
    ball7.style.left = positionX7 + "px";
    positionY7 = positionY7 - velocity7;
    ball7.style.top = positionY7 + "px";
    ball7.style.background = "black";
    velocity7 = 2.5;
  } else if (reverseX7 === true && reverseY7 === true) {
    positionX7 = positionX7 - velocity7;
    ball7.style.left = positionX7 + "px";
    positionY7 = positionY7 - velocity7;
    ball7.style.top = positionY7 + "px";
    ball7.style.background = "gray";
    velocity7 = 1.5;
  }

  if (positionX7 > Xmax7 || positionX7 <= Xmin7) {
    reverseX7 = !reverseX7;
  } else if (positionY7 > Ymax7 || positionY7 <= Ymin7) {
    reverseY7 = !reverseY7;
  }
}

// This call the moveBall function every 100ms
setInterval(moveBall7, 1);
