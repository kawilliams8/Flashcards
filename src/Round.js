const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck || [];
    this.currentCard;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.currentDeck[this.turns];
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    turn.evaluateGuess() === false ? this.incorrectGuesses.push(this.currentCard.id) : false;
  }

  calculatePercentCorrect() {

  }

  endRound() {

  }
}

module.exports = Round;