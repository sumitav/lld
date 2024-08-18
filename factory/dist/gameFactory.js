"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameFactory = void 0;
const game_1 = require("./game");
const leaderboard_1 = require("./leaderboard");
const player_1 = require("./player");
class GameFactory {
    createGame(name) {
        return new game_1.Game(name);
    }
    createLeaderboard() {
        return new leaderboard_1.Leaderboard();
    }
    createPlayer(name) {
        return new player_1.Player(name);
    }
}
exports.GameFactory = GameFactory;
//# sourceMappingURL=gameFactory.js.map