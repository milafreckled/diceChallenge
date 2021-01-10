var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
var randomPath1 = "images/dice"+randomNumber1+".png";
var randomPath2 = "images/dice"+randomNumber2+".png";
image1.setAttribute("src", randomPath1);
image2.setAttribute("src", randomPath2);
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
  } else {
    document.querySelector("h1").innerHTML = "It's a dice!";
}
