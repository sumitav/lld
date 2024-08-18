"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaderboard = void 0;
class Leaderboard {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    sort(players) {
        return this.strategy.sort(players);
    }
}
exports.Leaderboard = Leaderboard;
//# sourceMappingURL=leaderboard.js.map