// function randomImages () {



  // let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  // document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

  // let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  // document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // if (randomNumber1 === randomNumber2) {
  //   document.querySelector("h1").innerHTML = "Draw! Reroll Dice.";
  //   document.querySelector("h1").style.color = "Darkred";
  // }
  // else if (randomNumber1 > randomNumber2) {
  //   document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!";
  //   document.querySelector("h1").style.color = "Yellow";
  // }
  // else {
  //   document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681";
  //   document.querySelector("h1").style.color = "White";
  // }

// }

// randomImages();

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDice1 = "dice" + randomNumber1 + ".png";

let randomImageSource1 = "images/" + randomDice1;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDice2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "images/" + randomDice2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins! Refresh to Play.";
  document.querySelector("h1").style.color = "Yellow";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681 Refresh to Play.";
  document.querySelector("h1").style.color = "White";
}
else {
  document.querySelector("h1").innerHTML = "Draw! Reroll Dice.";
  document.querySelector("h1").style.color = "Darkred";
}

