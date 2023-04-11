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
    const player = new Player("Joe");
    expect(player.playerName).toEqual("Joe");
    expect(player.totalScore).toEqual(0);
    expect(player.roundScore).toEqual(0);
    expect(player.roll).toEqual(0);
  })

  test('should add a score to the players current score total', () => {
    const playerScore = new Player("player1");
    playerScore.playerTurn();
    expect(playerScore.roundScore).toBeLessThanOrEqual(6);
    expect(playerScore.roundScore).toBeGreaterThan(0);
    expect(playerScore.roundScore).toEqual(playerScore.roll);
  })

  test('should correctly return a random number from 1-6 for the player', () => {
    const playerRolled = new Player("player1");
    playerRolled.rollDice();
    expect(playerRolled.roll).toBeLessThanOrEqual(6);
  })

  test('should return True if player score is greater than or equal to 100', () => {
    const playerRoll = new Player("player1");
    const playerRollLost = new Player("player2");
    playerRoll.totalScore = 99;
    playerRoll.roundScore = 1
    playerRollLost.totalScore = 90;
    playerRollLost.roundScore = 0;
    expect(playerRoll.checkWin()).toBeTruthy();
    expect(playerRollLost.checkWin()).toBeFalsy();
  })
});