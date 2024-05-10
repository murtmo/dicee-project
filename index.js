function rollDice() {
  // random number 1-6
  var randomNumber1 = Math.floor(Math.random() * 6 +1);
  var randomNumber2 = Math.floor(Math.random() * 6 +1);

  // img path
  var dice1ImgPath = "./images/dice" + randomNumber1 + ".png";
  var dice2ImgPath = "./images/dice" + randomNumber2 + ".png";

  // target dice img
  var targetDice1 = document.getElementsByClassName("img1")[0];
  var targetDice2 = document.getElementsByClassName("img2")[0];

  var targetTitle = document.querySelector("h1");
  var newTitle
  if(randomNumber1 === randomNumber2) {
    newTitle = "Draw!";
  } else if(randomNumber1 > randomNumber2) {
    newTitle = "Player 1 Wins!";
  } else {
    newTitle = "Player 2 Wins!";
  }

  // - Set dice image
  targetDice1.setAttribute("src", dice1ImgPath)
  targetDice2.setAttribute("src", dice2ImgPath)

  // - Change title
  targetTitle.innerText = newTitle
}
rollDice();