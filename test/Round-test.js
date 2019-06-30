const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {

  let card1, card2, card3, deck, round;
  beforeEach (() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  deck = new Deck([card1, card2, card3]);
  round = new Round(deck);
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should set the first card of the deck as the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  })

  it('should count the turns taken', () => {
    expect(round.turns).to.equal(0);
    round.takeTurn();
    round.takeTurn();
    expect(round.turns).to.equal(2);
  })

  it('should keep track of all incorrect guesses', () => {
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn('capybara');
    expect(round.incorrectGuesses[0]).to.equal(1);
    round.takeTurn('spleen');
    expect(round.incorrectGuesses[1]).to.equal(14);
    round.takeTurn('Lex');
    expect(round.incorrectGuesses[2]).to.equal(12);
  })

  it('should calculate the percentage of correct answers by a player', () => {
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn('capybara');
    round.takeTurn('spleen');
    round.takeTurn('Fitzgerald');
    expect(round.calculatePercentCorrect()).to.equal(33);
  })

});