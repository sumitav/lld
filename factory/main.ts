import { GameFactory } from './gameFactory';

const factory = new GameFactory();

const game = factory.createGame("Chess");
game.play();

const leaderboard = factory.createLeaderboard();
const player1 = factory.createPlayer("John");
const player2 = factory.createPlayer("Jane");

leaderboard.addPlayer(player1);
leaderboard.addPlayer(player2);
leaderboard.showLeaderboard();

player1.playGame(game);
player2.playGame(game);
//use of factory pattern
//here we have a factory class which has methods to
// create game,leaderboard and player
