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
    this.game.endTime = Date.now();
    this.timeDifference = this.game.endTime - this.game.startTime;
  console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! Time spent: ${Math.floor(this.timeDifference / 1000)} seconds.`);
    if (this.calculatePercentCorrect() < 40) {
      console.log(`Score higher than 40% correct to complete this round. Time spent: ${Math.floor(this.timeDifference / 1000)}. Begin again.`);
      this.game.start();
    } else if (this.calculatePercentCorrect() >= 75 && this.game.roundCount === 1) {
      this.game.roundCount ++;
      this.game.start();
    } else {
      console.log('** Game Over **')
    }
    return (`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! Time spent: ${Math.floor(this.timeDifference / 1000)} seconds.`);
  }
}

module.exports = Round;