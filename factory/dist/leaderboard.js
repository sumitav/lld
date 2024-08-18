"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaderboard = void 0;
class Leaderboard {
    constructor() {
        this.players = [];
    }
    addPlayer(player) {
        this.players.push(player);
    }
    showLeaderboard() {
        console.log("Leaderboard:");
        this.players.forEach((player, index) => {
            console.log(`${index + 1}. ${player.name}`);
        });
    }
}
exports.Leaderboard = Leaderboard;
//# sourceMappingURL=leaderboard.js.map