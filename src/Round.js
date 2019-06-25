class Round {
  constructor(deck) {
    this.deck = deck || [];
    this.currentCard;
    this.turns = 0;
  }

  returnCurrentCard() {
    this.currentCard = this.deck.currentDeck[0];
    return this.currentCard;
  }

  takeTurn() {
    this.turns++;
  }

  calculatePercentCorrect() {

  }

  endRound() {

  }
}

module.exports = Round;