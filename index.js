function rollDice() {
  // random number 1-6
  var randomNumber1 = Math.floor(Math.random() * 6 +1);
  var randomNumber2 = Math.floor(Math.random() * 6 +1);

  // random image sources
  var diceImageSource = "./images/"
  var randomDice1Image = "dice" + randomNumber1 + ".png";
  var randomDice2Image = "dice" + randomNumber2 + ".png";

  var dice1ImagePath = diceImageSource + randomDice1Image;
  var dice2ImagePath = diceImageSource + randomDice2Image;

  // target dice img
  var targetDice1 = document.getElementsByClassName("img1")[0];
  var targetDice2 = document.getElementsByClassName("img2")[0];

  var targetTitle = document.querySelector("h1");
  var newTitle
  if(randomNumber1 === randomNumber2) {
    newTitle = "Draw!";
  } else if(randomNumber1 > randomNumber2) {
    newTitle = "🚩 Player 1 Wins!";
  } else {
    newTitle = "Player 2 Wins! 🚩";
  }

  // - Set dice image
  targetDice1.setAttribute("src", dice1ImagePath)
  targetDice2.setAttribute("src", dice2ImagePath)

  // - Change title
  targetTitle.innerText = newTitle
}
rollDice();