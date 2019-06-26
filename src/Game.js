const data = require('./data');
const datasets = [data.prototypeData, data.javascriptTrivia];
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.roundCount = 1;
    this.currentRound;
    this.startTime;
    this.endTime;
  }
  
  start() {
    this.startTime = Date.now();
    const dataset = datasets[(this.roundCount - 1)];
    const cards = dataset.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    const deck = new Deck(cards);
    this.currentRound = new Round(deck, this);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck) {
    console.log(`-----------------------------------------------------------------------
Welcome to FlashCards! You are playing Round ${this.roundCount} with ${deck.countCards()} cards.
Answer more than 90% of the questions correctly to complete this round.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;