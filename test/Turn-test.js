const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function () {

  let card, turn;
  this.beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a player guess during a turn', () => {
    expect(turn.guess).to.equal('object');
  });

  it('should take in the current card', () => {
    expect(turn.card).to.equal(card);
  });

  it('should compare a player guess to the card\'s correct answer', () => {
    expect(turn.guess).to.deep.equal(card.correctAnswer);
  });

  it('should return the current guess', () => {
    expect(turn.returnGuess()).to.equal('object');
  })

  it('should return the current card', () => {
    expect(turn.returnCard()).to.equal(card);
  })

  it('should evaluate the player guess against the correct answer from the card', () => {
    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('should giveback after it compares the player guess', () => {
    expect(turn.giveFeedback()).to.equal('correct!');
  })

});