const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  let card1;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  });

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card1).to.be.an.instanceof(Card);
  }); 

  it('should store a question', () => {
    expect(card1.question).to.equal('What is Robbie\'s favorite animal');
  });  

  it('should store a list of possible answers', () => {
    expect(card1.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
  });  

  it('should store the correct answer', () => {
    expect(card1.correctAnswer).to.equal('sea otter');
  });
});