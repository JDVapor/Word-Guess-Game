var hangman = {

  wins: 0,
  guesses: 13,
  picks: [],
  newWord: "",

  pickWord: function() {
    const sportsWords = ['baseball', 'basketball', 'football', 'hockey', 'soccer', 'tennis', 'fumble', 'interception', 'touchdown', 'homerun', 'out', 'strike', 'hit', 'error', 'single', 'double', 'triple', 'free throw', 'slam dunk', 'pass', 'foul', 'technical foul', 'catch', 'field goal', 'punt', 'first down', 'turn over on downs', 'goal', 'penalty kick', 'icing', 'block', 'steal', 'assist', 'love', 'ace']

    const wordPick = () => {
      var wordIndex = Math.floor(Math.random() * sportsWords.length);
      this.newWord = sportsWords[wordIndex - 1];
    }
    wordPick();
  },

  winner: function() {
    var winsElement = document.getElementById("wins");
    var wins = 0;
    winsElement.textContent = wins.toString();
  },
  guessesLeft: function() {
    if (this.guesses >= 1) {
      gRemain = this.guesses - this.picks.length;
      if (gRemain <= 0) {
        alert("YOU LOSE!");
      }
    } else {
      alert("YOU LOSE!");
    }
  },

  chooseLetter: function(userChoice) {

    var targetDiv = document.getElementById("picks");
    this.picks.push(userChoice);
    for (var i = 0; i < this.picks.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = this.picks[i];
      targetDiv.appendChild(listItem);
    }
  },

  wordPrint: function() {
    var wordDiv = document.getElementById("worddd")
    var wordSpace = this.newWord.split("_");
    var wordDisp = document.createElement("li");
    wordDisp.textContent = wordSpace;
    wordDiv.appendChild(wordDisp);
  }
};

hangman.pickWord();

hangman.wordPrint();

document.onkeyup = function(event) {

  var userChoice = event.key.toLowerCase();

  if (hangman.picks.indexOf(userChoice) === -1) {
    hangman.chooseLetter(userChoice);
  }
}

// var strsplit = string.split("");
