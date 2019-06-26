const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should start the game', function() {
    const game = new Game();
    game.start();
  })

  it('should store what time the player started a round', function () {
    const game = new Game();
    game.start();
    expect(this.startTime).to.be.a('number');
  })

  it('should store what time the player completed a round', function () {
    const game = new Game();
    game.start();
    expect(this.endTime).to.be.a('number');
  })

});