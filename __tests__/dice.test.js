import { Game } from './../src/dice.js';

describe('Game', () => {

  test('should create a new game object with initialized players, currentId, and maxId', () => {
    const game = new Game();
    expect(game.gamePlayers).toEqual({});
    expect(game.currentId).toEqual(1);
    expect(game.maxId).toEqual(0);
  });
});