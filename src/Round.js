const Turn = require('../src/Turn');

class Round {
  constructor(deck, game) {
    this.deck = deck || [];
    this.currentCard;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.game = game;
  }

  returnCurrentCard() {
    this.currentCard = this.deck.currentDeck[this.turns];
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    return Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    if (this.calculatePercentCorrect() < 90) {
      console.log('Score higher than 90% correct to complete this round.');
      this.game.start();
    } else if (this.calculatePercentCorrect() >= 75 && this.game.roundCount === 1) {
      this.game.roundCount = 2;
      this.game.start();
    } else {
      console.log('** Game Over **')
    }
    return (`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;