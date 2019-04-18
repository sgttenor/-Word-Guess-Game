var words = [
  "excalibur",
  "conquer",
  "extinction",
  "wizard",
  "enterprise",
  "adventure",
  "somewhere",
  "endearment",
  "queen",
  "musical",
  "tenor",
  "barbershop"
  ];




var guess; //user guess
var letters = []; //correctly guessed letters
var wrongLetters = []; //incorrectly guessed letters
var counter = 0; //counts correct letters
var lives; //counts users lives
var score;//solved words
var numGuesses = 9;

var word = words[Math.floor(Math.random() * words.length)];

//choosen word is replaced with
function start() {
  for (i = 0; i < word.length; i++) {
    letters[i] = "__";
  }

  document.getElementById("answer").innerHTML = letters.join(" ");
  console.log(word);
}

function checkLetter() {
  document.onkeyup = function(event) {
    guess = event.key.toLowerCase();
    var found = false; //lets use bool to check if a letter was found
    for (i = 0; i < word.length; i++) {
      if (guess === word[i]) {
        letters[i] = guess;
        document.getElementById("answer").innerHTML = letters.join(" ");
        found = true;
      }
    }
   
    if (found) return; 
    
    if (wrongLetters.indexOf(guess) < 0) {
      wrongLetters.push(guess);
      document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
    }
  }
  
}

start();
checkLetter();









  







  

