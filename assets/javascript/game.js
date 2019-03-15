var hangman = {

  wins: 0,
  guesses: 13,
  picks: [],
  newWord: "",
  display: [],
  blanks: 0,
  allLetters: [],

  pickWord: function() {
    const sportsWords = ['baseball', 'basketball', 'football', 'hockey', 'soccer', 'tennis', 'fumble', 'interception', 'touchdown', 'homerun', 'out', 'strike', 'hit', 'error', 'single', 'double', 'triple', 'free throw', 'slam dunk', 'pass', 'foul', 'technical foul', 'catch', 'field goal', 'punt', 'first down', 'turn over on downs', 'goal', 'penalty kick', 'icing', 'block', 'steal', 'assist', 'love', 'ace']

    const wordPick = () => {
      var wordIndex = Math.floor(Math.random() * sportsWords.length);
      this.newWord = sportsWords[wordIndex - 1];
    }
    wordPick();
  },

  gameStart: function() {

    this.pickWord();
    console.log(this.newWord);

    this.allLetters = this.newWord.split("");
    this.blanks = this.allLetters.length;
    this.display = [];
    this.picks = [];
    this.guesses = 13;

    for (var i = 0; i < this.blanks; i++) {
      if (this.allLetters[i] !== ' ') {
        this.display.push("_");
      } else {
        this.display.push("&nbsp;");
      }
      document.getElementById("guesses").innerHTML = this.guesses;
      document.getElementById("display").innerHTML = this.display.join("&nbsp;");
      document.getElementById('picks').innerHTML = this.picks.join(" ");
    }
  },

  chooseLetter: function(letter) {

    var letterConfirm = false;

    for (var i = 0; i < this.blanks; i++) {
      if (this.newWord[i] === letter) {
        letterConfirm = true;
      }
    }

    if (letterConfirm) {

      for (var i = 0; i < this.blanks; i++) {

        if (this.newWord[i] === letter) {
          this.display[i] = letter;
        }
      }
    } else {
      this.picks.push(letter);
      this.guesses--;
    }
  },

  nextRound: function() {

    document.getElementById("guesses").innerHTML = this.guesses;
    document.getElementById("display").innerHTML = this.display.join(" ");
    document.getElementById("picks").innerHTML = this.picks.join(" ");

    if (this.allLetters.toString() == this.display.toString()) {
      this.wins++;
      alert(`WINNER WINNER CHICKEN DINNER! "${this.newWord}" is correct`);
      document.getElementById("wins").innerHTML = this.wins;
      this.gameStart();
    } else if (this.guesses == 0) {
      alert(`Oh noes, you lose. The word was ${this.newWord}`);
      this.gameStart();
    }
  }
}

hangman.gameStart();

document.onkeyup = function(event) {

  var userChoice = event.key.toLowerCase();

  if (hangman.picks.indexOf(userChoice) === -1) {
    hangman.chooseLetter(userChoice);
  }
  hangman.nextRound();
}
