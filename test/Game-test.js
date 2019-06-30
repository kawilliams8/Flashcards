const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');

describe('Game', function() {

  let game;
  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should start the game', () => {
    game.start();
  })

  it.skip('should store what time the player started a round', () => {
    game.start();
    expect(this.startTime).to.be.a('number');
  })

  it.skip('should store what time the player completed a round', () => {
    game.start();
    expect(this.endTime).to.be.a('number');
  })

});