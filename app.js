var mes1 = document.getElementById('mes1');
var mes2 = document.getElementById('mes2');
var mes3 = document.getElementById('mes3');
const btn = document.getElementById('btn');

var answer = Math.floor(Math.random() * 100) + 1;
var noOfGuesses = 0;
var guessedNumber = [];

function play() {
  var userGuess = document.getElementById('guess').value;
  if (userGuess < 1 || userGuess > 100) {
    alert("Please enter a number between 1 and 100.");
  } else {
    guessedNumber.push(userGuess);
    noOfGuesses += 1;

    if (userGuess < answer) {
      mes1.textContent = "You guess is too low.";
      mes2.textContent = "No. of guesses: " + noOfGuesses;
      mes3.textContent = "Guessed Number: " + guessedNumber;

    } else if (userGuess > answer) {
      mes1.textContent = "You guess is too high.";
      mes2.textContent = "No. of guesses: " + noOfGuesses;
      mes3.textContent = "Guessed Number: " + guessedNumber;
    }
    else if (userGuess == answer) {
      mes1.textContent = "You Win!!"
      mes2.textContent = "The number was: " + answer;
      mes3.textContent = "You guessed it in " + noOfGuesses + " guessed";
    }
  }
}

btn.addEventListener('click', function () {
  play();
 })
 
 document.addEventListener('keyup', e => {
   if (e.keyCode === 13) {
     play();
   }
 });
