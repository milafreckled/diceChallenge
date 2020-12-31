var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
var randomPath1 = "images/dice"+randomNumber1+".png";
var randomPath2 = "images/dice"+randomNumber2+".png";
image1.setAttribute("src", randomPath1);
image2.setAttribute("src", randomPath2);
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "s🚩Player 1 wins!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
  } else {
    document.querySelector("h1").innerHTML = "It's a dice!";
}
  //console.info( "This page is reloaded" );
  /*switch (randomNumber1) {
    case (1):
      document.querySelector(".img1").setAttribute("src", "images/dice1.png");
      break;
    case (2):
      document.querySelector(".img1").setAttribute("src", "images/dice2.png");
      break;
    case (3):
      document.querySelector(".img1").setAttribute("src", "images/dice3.png");
      break;
    case (4):
      document.querySelector(".img1").setAttribute("src", "images/dice4.png");
      break;
    case (5):
      document.querySelector(".img1").setAttribute("src", "images/dice5.png");
      break;
    case (6):
      document.querySelector(".img1").setAttribute("src", "images/dice6.png");
      break;
  }
  switch (randomNumber2) {
    case (1):
      document.querySelector(".img2").setAttribute("src", "images/dice1.png");
      break;
    case (2):
      document.querySelector(".img2").setAttribute("src", "images/dice2.png");
      break;
    case (3):
      document.querySelector(".img2").setAttribute("src", "images/dice3.png");
      break;
    case (4):
      document.querySelector(".img2").setAttribute("src", "images/dice4.png");
      break;
    case (5):
      document.querySelector(".img2").setAttribute("src", "images/dice5.png");
      break;
    case (6):
      document.querySelector(".img2").setAttribute("src", "images/dice6.png");
      break;
  }*/
