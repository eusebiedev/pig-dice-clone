import { Game, Player } from './../src/dice.js';

describe('Game', () => {

  test('should create a new game object with initialized players, currentId, and maxId', () => {
    const game = new Game();
    expect(game.gamePlayers).toEqual({});
    expect(game.currentId).toEqual(1);
    expect(game.maxId).toEqual(0);
  });
});

describe('Player', () => {

  test('should create a new player with initialized scores', () => {
    const player = new Player();
    expect(player.playerName).toEqual([]);
    // expect(player.totalScore).toEqual(0);
    // expect(player.roundScore).toEqual(0);
    // expect(player.roll).toEqual(0);
  })
});