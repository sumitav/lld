"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameFactory_1 = require("./gameFactory");
const factory = new gameFactory_1.GameFactory();
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
//# sourceMappingURL=main.js.map